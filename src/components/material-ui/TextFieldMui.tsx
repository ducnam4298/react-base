import { useState } from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { FormikValues } from 'formik';
import { IFormControl } from 'common/models/form';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
  control: IFormControl;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const TextFieldMui = (props: UIProps) => {
  const [shrink, setShrink] = useState(false);
  return (
    <FormControl fullWidth={props.fullWidth} variant={props.variant ?? 'outlined'}>
      <InputLabel
        id={props.control.id + '-input-outlined-label'}
        shrink={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        htmlFor={props.control.id + '-input-outlined'}
        error={props.error}
      >
        {props.control.title}
      </InputLabel>
      <OutlinedInput
        id={props.control.id + '-input-outlined'}
        label={props.control.title}
        placeholder={props.placeholder ?? 'Nhập ' + props.control.title?.toLowerCase()}
        notched={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        onFocus={() => setShrink(true)}
        onBlur={() => setShrink(false)}
        value={props.formik.values[props.control.id] ?? ''}
        onChange={e => props.onChange && props.onChange(e.target.value)}
        type={props.control.type}
        error={props.error}
        aria-describedby={props.control.id + '-helper-text'}
      />
      {props.helperText && (
        <FormHelperText error={props.error} id={props.control?.id + '-helper-text'}>
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextFieldMui;
