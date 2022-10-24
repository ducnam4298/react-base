import { useState } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, useTheme } from '@mui/material';
import { FormikState } from 'formik';
import { IFormControl } from 'common/models/form';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikState<any>;
  control: IFormControl;
  options?: { value: string; label: string }[];
  onChange?: (value: any) => void;
  error?: boolean;
  helperText?: string;
}
const SelectFieldMui = (props: UIProps) => {
  const theme = useTheme();
  const [shrink, setShrink] = useState(false);
  const RenderValue = (selected: any, text: string) => {
    if (!props.formik.values[props.control.id] || props.formik.values[props.control.id] === '') {
      if (props.notched || shrink) {
        return (
          <span style={{ color: theme.palette.text.disabled }}>
            {props.placeholder ?? 'Chọn' + text}
          </span>
        );
      } else {
        return '';
      }
    } else {
      return props.options?.find(o => o.value === selected)?.label;
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
        labelId={props.control.id + '-select-outlined-label'}
        id={props.control.id + '-select-outlined'}
        label={props.control.title}
        displayEmpty={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        defaultValue={''}
        value={props.formik.values[props.control.id] ?? ''}
        onChange={e => props.onChange && props.onChange(e.target.value)}
        renderValue={selected => RenderValue(selected, ` ${props.control.title ?? ''}`)}
        onFocus={() => setShrink(true)}
        onBlur={() => setShrink(false)}
        notched={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        error={props.error}
      >
        {props.options?.map(o => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
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
