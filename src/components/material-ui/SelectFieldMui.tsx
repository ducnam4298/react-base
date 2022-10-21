import { useState } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, useTheme } from '@mui/material';
import { FormikValues } from 'formik';
import { IFormControl } from 'common/models/form';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
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
    if (
      (!props.formik.values[props.control.id] || props.formik.values[props.control.id] === '') &&
      (props.notched || shrink)
    ) {
      return (
        <span style={{ color: theme.palette.text.disabled }}>
          {props.placeholder ?? 'Chọn' + text}
        </span>
      );
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
        Giới tính
      </InputLabel>
      <Select
        labelId={props.control.id + '-select-outlined-label'}
        id={props.control.id + '-select-outlined'}
        label="Giới tính"
        displayEmpty={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        defaultValue={props.control.default ?? ''}
        value={props.formik.values[props.control.id]}
        onChange={e => props.onChange && props.onChange(e.target.value)}
        renderValue={selected => RenderValue(selected, ' giới tính')}
        onFocus={() => setShrink(true)}
        onBlur={() => setShrink(false)}
        notched={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        inputProps={{
          id: props.options?.find(o => o.value === props.formik.values[props.control.id])?.label,
          value: props.options?.find(o => o.value === props.formik.values[props.control.id])?.label,
        }}
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
