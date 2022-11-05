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
  onChange?: (option: IOption | IOption[] | null, details?: AutocompleteChangeDetails<any>) => void;
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
      value={props.formik.values[props.control.id]}
      options={props.control.options ?? []}
      onChange={(e, value, reason, details) => props.onChange && props.onChange(value, details)}
      noOptionsText="Không có dữ liệu"
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
          error={props.error}
          helperText={props.helperText}
          variant={props.variant ?? 'outlined'}
        />
      )}
    />
  );
};

export default AutocompleteFieldMui;
