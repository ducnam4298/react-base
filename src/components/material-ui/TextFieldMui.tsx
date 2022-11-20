import { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { FormikState } from 'formik';
import { ControlType, IFormControl } from 'common/models/form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikState<any>;
  control: IFormControl;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const TextFieldMui = (props: UIProps) => {
  const [shrink, setShrink] = useState(false);
  const [showPassword, handleShowPassword] = useState(false);
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
        placeholder={
          props.control.placeholder
            ? props.control.placeholder
            : props.control?.title
            ? `Nhập ${props.control?.title.toLowerCase()}`
            : ''
        }
        notched={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        onFocus={() => setShrink(true)}
        onBlur={() => setShrink(false)}
        value={props.formik.values[props.control.id] ?? ''}
        onChange={e => props.onChange && props.onChange(e.target.value)}
        type={showPassword ? 'text' : props.control.type}
        endAdornment={
          props.control.type === ControlType.Password ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            <></>
          )
        }
        inputProps={{
          inputMode: props.control.type === ControlType.Number ? 'numeric' : 'text',
          pattern: props.control.type === ControlType.Number ? '[0-9]*' : undefined,
          autoComplete: 'off',
        }}
        error={props.error}
        aria-describedby={props.control.id + '-helper-text'}
        size={props.control.size}
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
