import { createContext, forwardRef, useContext, useEffect, useRef, useState } from 'react';
import {
  TextField,
  Autocomplete,
  AutocompleteChangeDetails,
  useMediaQuery,
  ListSubheader,
  Typography,
  useTheme,
  MenuItem,
} from '@mui/material';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import { FormikState } from 'formik';
import { IFormControl } from 'common/models/form';
import { IOption } from 'common/utils/optionMirror';

const LISTBOX_PADDING = 8;

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikState<any>;
  control: IFormControl;
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
  groupValue?: string;
  onChange?: (
    option?: (string | number) | IOption[],
    details?: AutocompleteChangeDetails<any>
  ) => void;
  error?: boolean;
  helperText?: string;
}
const AutocompleteFieldMui = (props: UIProps) => {
  const [shrink, setShrink] = useState(false);
  const params = () => {
    if (
      props.optionValue &&
      props.optionValue !== '' &&
      props.optionLabel &&
      props.optionLabel !== ''
    ) {
      return [props.optionValue, props.optionLabel];
    } else if (
      props.control.optionValue &&
      props.control.optionValue !== '' &&
      props.control.optionLabel &&
      props.control.optionLabel !== ''
    ) {
      return [props.control.optionValue, props.control.optionLabel];
    } else {
      return ['', ''];
    }
  };
  const group = () => {
    if (props.groupValue && props.groupValue !== '') {
      return props.groupValue;
    } else if (props.control.groupValue && props.control.groupValue !== '') {
      return props.control.groupValue;
    } else {
      return '';
    }
  };
  const options = () => {
    if (props.options && props.options.length > 0) {
      return props.options;
    } else if (props.control.options && props.control.options.length > 0) {
      return props.control.options;
    } else {
      return [];
    }
  };
  const Item = (ps: ListChildComponentProps) => {
    const { data, index, style } = ps;
    const dataSet = data[index];
    const inlineStyle = {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    };
    if (group() && Object.prototype.hasOwnProperty.call(dataSet, group())) {
      return (
        <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
          {dataSet?.[group()]?.toUpperCase()}
        </ListSubheader>
      );
    } else {
      return (
        <Typography
          component={MenuItem}
          key={dataSet[1]?.[params()[0]]}
          {...dataSet[0]}
          noWrap
          style={inlineStyle}
        >
          {dataSet[1]?.[params()[1]]}
        </Typography>
      );
    }
  };
  const OuterElementContext = createContext({});
  const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  });
  const ListboxComponent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(
    function ListboxComponent(ps, ref) {
      const useResetCache = (data: any) => {
        const ref = useRef<VariableSizeList>(null);
        useEffect(() => {
          if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
          }
        }, [data]);
        return ref;
      };
      const { children, ...other } = ps;
      const itemData: React.ReactChild[] = [];
      (children as React.ReactChild[]).forEach(
        (item: React.ReactChild & { children?: React.ReactChild[] }) => {
          itemData.push(item);
          itemData.push(...(item.children || []));
        }
      );
      const theme = useTheme();
      const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
      });
      const itemCount = itemData.length;
      const itemSize = smUp ? 36 : 48;
      const getChildSize = (child: React.ReactChild) => {
        if (Object.prototype.hasOwnProperty.call(child, 'group')) {
          return 48;
        }
        return itemSize;
      };
      const getHeight = () => {
        if (itemCount > 5) {
          return 5 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
      };
      const gridRef = useResetCache(itemCount);
      return (
        <div ref={ref}>
          <OuterElementContext.Provider value={other}>
            <VariableSizeList
              itemData={itemData}
              height={getHeight() + 2 * LISTBOX_PADDING}
              width="100%"
              ref={gridRef}
              outerElementType={OuterElementType}
              innerElementType="ul"
              itemSize={index => getChildSize(itemData[index])}
              overscanCount={5}
              itemCount={itemCount}
              children={Item}
            />
          </OuterElementContext.Provider>
        </div>
      );
    }
  );

  const Group = () => {
    return (
      <Autocomplete
        ListboxComponent={ListboxComponent}
        multiple={props.control.multiple}
        fullWidth={props.fullWidth}
        id={props.control.id + '-autocomplete-outlined'}
        limitTags={props.control.limitTags ?? 1}
        filterSelectedOptions={options() ? true : false}
        value={
          props.control.multiple
            ? props.formik.values[props.control.id] ?? []
            : props.formik.values[props.control.id] ?? null
        }
        options={options()}
        onChange={(e, options, reason, details) => {
          if (props.control.multiple) {
            props.onChange && props.onChange(options, details);
          } else {
            const opt = options[params()[0]];
            props.onChange && props.onChange(opt, details);
          }
        }}
        disableClearable
        noOptionsText="Không có dữ liệu"
        isOptionEqualToValue={(option, value) => {
          if (value) {
            if (props.control.multiple) {
              return option[params()[0]] === value[params()[0]];
            } else {
              return option[params()[0]] === value;
            }
          } else {
            return false;
          }
        }}
        getOptionLabel={option =>
          option[params()[1]] ?? options()?.find(o => o[params()[0]] === option)[params()[1]]
        }
        renderOption={(props, option) => [props, option] as React.ReactNode}
        groupBy={option => option?.[group()]}
        renderGroup={params => params as unknown as React.ReactNode}
        renderInput={ps => (
          <TextField
            {...ps}
            label={props.control.title}
            fullWidth={props.fullWidth}
            InputLabelProps={{
              ...ps.InputLabelProps,
              id: props.control?.id + '-autocomplete-outlined-label',
              shrink:
                (!props.control.multiple && props.formik.values[props.control.id]) ||
                (props.control.multiple && props.formik.values[props.control.id]?.length > 0)
                  ? true
                  : props.notched ?? shrink,
              htmlFor: props.control?.id + '-autocomplete-outlined',
            }}
            InputProps={{
              ...ps.InputProps,
              size: props.control.size,
              id: props.control.id + '-autocomplete-outlined',
              onFocus: () => setShrink(true),
              onBlur: () => setShrink(false),
            }}
            inputProps={{
              ...ps.inputProps,
              placeholder: props.control.placeholder
                ? props.control.placeholder
                : props.control?.title
                ? `Nhập hoặc chọn ${props.control?.title?.toLowerCase()}`
                : '',
              autoComplete: 'off',
            }}
            error={props.error}
            helperText={props.helperText}
            variant={props.variant ?? 'outlined'}
          />
        )}
      />
    );
  };
  
  const NonGroup = () => {
    return (
      <Autocomplete
        ListboxComponent={ListboxComponent}
        multiple={props.control.multiple}
        fullWidth={props.fullWidth}
        id={props.control.id + '-autocomplete-outlined'}
        limitTags={props.control.limitTags ?? 1}
        filterSelectedOptions={options() ? true : false}
        value={
          props.control.multiple
            ? props.formik.values[props.control.id] ?? []
            : props.formik.values[props.control.id] ?? null
        }
        options={options()}
        onChange={(e, options, reason, details) => {
          if (props.control.multiple) {
            props.onChange && props.onChange(options, details);
          } else {
            const opt = options[params()[0]];
            props.onChange && props.onChange(opt, details);
          }
        }}
        disableClearable
        noOptionsText="Không có dữ liệu"
        isOptionEqualToValue={(option, value) => {
          if (value) {
            if (props.control.multiple) {
              return option[params()[0]] === value[params()[0]];
            } else {
              return option[params()[0]] === value;
            }
          } else {
            return false;
          }
        }}
        getOptionLabel={option =>
          option[params()[1]] ?? options()?.find(o => o[params()[0]] === option)[params()[1]]
        }
        renderOption={(props, option) => [props, option] as React.ReactNode}
        renderGroup={params => params as unknown as React.ReactNode}
        renderInput={ps => (
          <TextField
            {...ps}
            label={props.control.title}
            fullWidth={props.fullWidth}
            InputLabelProps={{
              ...ps.InputLabelProps,
              id: props.control?.id + '-autocomplete-outlined-label',
              shrink:
                (!props.control.multiple && props.formik.values[props.control.id]) ||
                (props.control.multiple && props.formik.values[props.control.id]?.length > 0)
                  ? true
                  : props.notched ?? shrink,
              htmlFor: props.control?.id + '-autocomplete-outlined',
            }}
            InputProps={{
              ...ps.InputProps,
              size: props.control.size,
              id: props.control.id + '-autocomplete-outlined',
              onFocus: () => setShrink(true),
              onBlur: () => setShrink(false),
            }}
            inputProps={{
              ...ps.inputProps,
              placeholder: props.control.placeholder
                ? props.control.placeholder
                : props.control?.title
                ? `Nhập hoặc chọn ${props.control?.title?.toLowerCase()}`
                : '',
              autoComplete: 'off',
            }}
            error={props.error}
            helperText={props.helperText}
            variant={props.variant ?? 'outlined'}
          />
        )}
      />
    );
  };

  return props.control.group ? <Group /> : <NonGroup />;
};

export default AutocompleteFieldMui;
