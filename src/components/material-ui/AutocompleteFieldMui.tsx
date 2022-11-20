import { Autocomplete, AutocompleteChangeDetails, TextField } from '@mui/material';
import { IFormControl } from 'common/models/form';
import { IOption } from 'common/utils/optionMirror';
import { FormikState } from 'formik';
import { useState } from 'react';

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
  const options = () => {
    if (props.options && props.options.length > 0) {
      return props.options;
    } else if (props.control.options && props.control.options.length > 0) {
      return props.control.options;
    } else {
      return [];
    }
  };
  return (
    <Autocomplete
      multiple={props.control.multiple}
      fullWidth={props.fullWidth}
      id={props.control.id + '-autocomplete-outlined'}
      limitTags={props.control.limitTags ?? 1}
      filterSelectedOptions={props.control.options ? true : false}
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
            id: props.control?.id + '-autocomplete-outlined',
            onFocus: () => setShrink(true),
            onBlur: () => setShrink(false),
          }}
          inputProps={{
            ...ps.inputProps,
            placeholder: props.control.placeholder
              ? props.control.placeholder
              : props.control?.title
              ? `Nhập hoặc chọn ${props.control?.title.toLowerCase()}`
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

export default AutocompleteFieldMui;
