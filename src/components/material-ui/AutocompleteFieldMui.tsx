import { Autocomplete, AutocompleteChangeDetails, TextField } from '@mui/material';
import { IFormControl } from 'common/models/form';
import { IOption } from 'common/utils/optionMirror';
import { FormikValues } from 'formik';
import { useState } from 'react';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
  control: IFormControl;
  onChange?: (
    option?: (string | number) | IOption[],
    details?: AutocompleteChangeDetails<any>
  ) => void;
  error?: boolean;
  helperText?: string;
}

const AutocompleteFieldMui = (props: UIProps) => {
  const [shrink, setShrink] = useState(false);
  return (
    <Autocomplete
      multiple={props.control.multiple}
      fullWidth={props.fullWidth}
      id={props.control.id + '-autocomplete-outlined'}
      limitTags={props.control.limitTags ?? 1}
      filterSelectedOptions
      defaultValue={props.formik.values[props.control.id]}
      value={props.formik.values[props.control.id]}
      options={props.control.options ?? []}
      onChange={(e, options, reason, details) => {
        if (props.control.multiple) {
          props.onChange && props.onChange(options, details);
        } else {
          const opt = options.value;
          props.onChange && props.onChange(opt, details);
        }
      }}
      disableClearable
      noOptionsText="Không có dữ liệu"
      isOptionEqualToValue={(option, value) => {
        if (props.control.multiple) {
          return option.value === value.value;
        } else {
          return option.value === value;
        }
      }}
      getOptionLabel={option =>
        option.label ?? props.control.options?.find(o => o.value === option)?.label
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
              (props.control.multiple && props.formik.values[props.control.id].length > 0)
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
            placeholder: props.control?.title ? `Chọn ${props.control?.title.toLowerCase()}` : '',
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
