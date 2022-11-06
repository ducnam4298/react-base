import { Autocomplete, AutocompleteChangeDetails, TextField } from '@mui/material';
import { IFormControl } from 'common/models/form';
import { FormikValues } from 'formik';
import { isArray } from 'lodash';
import { useState } from 'react';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
  control: IFormControl;
  onChange?: (
    option: (string | number) | (string[] | number[]) | null,
    details?: AutocompleteChangeDetails<any>
  ) => void;
  error?: boolean;
  helperText?: string;
}

const AutocompleteFieldMui = (props: UIProps) => {
  const [shrink, setShrink] = useState(false);
  return props.control.multiple ? (
    <Autocomplete
      multiple={props.control.multiple}
      fullWidth={props.fullWidth}
      id={props.control.id + '-autocomplete-outlined'}
      limitTags={props.control.limitTags ?? 1}
      value={props.formik.values[props.control.id]}
      options={props.control.options ?? []}
      onChange={(e, options, reason, details) => {
        const nOpts = options.map(o => o.value);
        props.onChange && props.onChange(nOpts, details);
      }}
      noOptionsText="Không có dữ liệu"
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={value => value.label ?? ''}
      renderInput={ps => (
        <TextField
          {...ps}
          label={props.control.title}
          fullWidth={props.fullWidth}
          InputLabelProps={{
            ...ps.InputLabelProps,
            id: props.control?.id + 'autocomplete-outlined-label',
            shrink: props.formik.values[props.control.id] ? true : props.notched ?? shrink,
            htmlFor: props.control?.id + 'autocomplete-outlined',
          }}
          InputProps={{
            ...ps.InputProps,
            size: props.control.size,
            id: props.control?.id + 'autocomplete-outlined',
            onFocus: () => setShrink(true),
            onBlur: () => setShrink(false),
          }}
          inputProps={{
            ...ps.inputProps,
            value: props.control.options?.find(o => o.value === ps.inputProps.value)?.label,
          }}
          error={props.error}
          helperText={props.helperText}
          variant={props.variant ?? 'outlined'}
        />
      )}
    />
  ) : (
    <Autocomplete
      multiple={props.control.multiple}
      fullWidth={props.fullWidth}
      id={props.control.id + '-autocomplete-outlined'}
      limitTags={props.control.limitTags ?? 1}
      filterSelectedOptions
      open
      defaultValue={props.formik.values[props.control.id]}
      value={props.formik.values[props.control.id]}
      options={props.control.options ?? []}
      onChange={(e, options, reason, details) => {
        if (isArray(options)) {
          const nOpts = options.map(o => o.value);
          props.onChange && props.onChange(nOpts, details);
        } else {
          const opt = options.value;
          props.onChange && props.onChange(opt, details);
        }
      }}
      noOptionsText="Không có dữ liệu"
      isOptionEqualToValue={(option, value) => {
        if (props.control.multiple) return option === value;
        else return option.value === value;
      }}
      getOptionLabel={value => props.control.options?.find(o => o.value === value)?.label ?? ''}
      renderInput={ps => (
        <TextField
          {...ps}
          label={props.control.title}
          fullWidth={props.fullWidth}
          InputLabelProps={{
            ...ps.InputLabelProps,
            id: props.control?.id + '-autocomplete-outlined-label',
            shrink: props.formik.values[props.control.id] ? true : props.notched ?? shrink,
            htmlFor: props.control?.id + '-autocomplete-outlined',
          }}
          InputProps={{
            ...ps.InputProps,
            size: props.control.size,
            id: props.control?.id + '-autocomplete-outlined',
            onFocus: () => setShrink(true),
            onBlur: () => setShrink(false),
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
