import { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';
import { FormikState } from 'formik';
import { IFormControl } from 'common/models/form';
import { isArray } from 'lodash';
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
  onChange?: (value: any) => void;
  error?: boolean;
  helperText?: string;
}
const SelectFieldMui = (props: UIProps) => {
  const theme = useTheme();
  const [shrink, setShrink] = useState(false);
  const [multipleValue, onChangeMultipleValue] = useState<string | string[] | undefined>(
    props.formik.values[props.control.id] ?? ''
  );
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
  const options = () => {
    if (props.options && props.options.length > 0) {
      return props.options;
    } else if (props.control.options && props.control.options.length > 0) {
      return props.control.options;
    } else {
      return [];
    }
  };
  const onChangeMultiple = (value?: string | string[]) => {
    onChangeMultipleValue(typeof value === 'string' ? value.split(',') : value);
  };
  const Value = (selected: any | any[]) => {
    if (isArray(selected)) {
      return selected
        .map(s => {
          const v = options()?.find(o => o[params()[0]] === s)[params()[1]] ?? '';
          if (v) return v;
          else return s;
        })
        .join(', ');
    } else {
      return options().find(o => o[params()[0]] === selected)[params()[1]] ?? '';
    }
  };
  const RenderValue = (selected: any | any[], text: string) => {
    if (
      !props.formik.values[props.control.id] ||
      props.formik.values[props.control.id] === '' ||
      props.formik.values[props.control.id]?.length === 0
    ) {
      if (props.notched || shrink) {
        return (
          <span style={{ color: theme.palette.text.disabled }}>
            {props.control.placeholder
              ? props.control.placeholder
              : props.control?.title
              ? `Chọn ${props.control?.title.toLowerCase()}`
              : ''}
          </span>
        );
      } else {
        return '';
      }
    } else {
      return Value(selected);
    }
  };
  return (
    <FormControl fullWidth={props.fullWidth} variant={props.variant ?? 'outlined'}>
      <InputLabel
        id={props.control.id + '-select-outlined-label'}
        shrink={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        error={props.error}
      >
        {props.control.title}
      </InputLabel>
      <Select
        multiple={props.control.multiple}
        labelId={props.control.id + '-select-outlined-label'}
        id={props.control.id + '-select-outlined'}
        label={props.control.title}
        displayEmpty={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        value={props.control.multiple ? multipleValue : props.formik.values[props.control.id] ?? ''}
        onChange={e => {
          if (isArray(e.target.value)) {
            if (e.target.value.length > 0) {
              props.onChange && props.onChange(e.target.value);
              props.control.multiple && onChangeMultiple(e.target.value);
            } else {
              props.onChange && props.onChange(undefined);
              props.control.multiple && onChangeMultiple('');
            }
          } else {
            props.onChange && props.onChange(e.target.value);
          }
        }}
        renderValue={selected => RenderValue(selected, ` ${props.control.title ?? ''}`)}
        onFocus={() => setShrink(true)}
        onBlur={() => setShrink(false)}
        size={props.control.size}
        notched={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        error={props.error}
      >
        {options().length > 0 ? (
          options().map(o => (
            <MenuItem key={o[params()[0]]} value={o[params()[0]]}>
              {o[params()[1]]}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Không có dữ liệu</MenuItem>
        )}
      </Select>
      {props.helperText && (
        <FormHelperText error={props.error} id={props.control.id + '-helper-text'}>
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectFieldMui;
