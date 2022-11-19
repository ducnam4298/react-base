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
  const RenderValue = (selected: any, text: string) => {
    if (!props.formik.values[props.control.id] || props.formik.values[props.control.id] === '') {
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
      return props.options && props.options.length > 0
        ? props.options?.find(o => o[props.control?.optionValue ?? ''] === selected)[
            props.control?.optionLabel ?? ''
          ]
        : props.control.options && props.control.options.length > 0
        ? props.control.options?.find(o => o[props.control?.optionValue ?? ''] === selected)[
            props.control?.optionLabel ?? ''
          ]
        : '';
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
        value={props.formik.values[props.control.id] ?? ''}
        onChange={e => props.onChange && props.onChange(e.target.value)}
        renderValue={selected => RenderValue(selected, ` ${props.control.title ?? ''}`)}
        onFocus={() => setShrink(true)}
        onBlur={() => setShrink(false)}
        size={props.control.size}
        notched={props.formik.values[props.control.id] ? true : props.notched ?? shrink}
        error={props.error}
      >
        {props.options && props.options.length > 0 ? (
          props.options?.map(o => (
            <MenuItem
              key={o[props.control?.optionValue ?? '']}
              value={o[props.control?.optionValue ?? '']}
            >
              {o[props.control?.optionLabel ?? '']}
            </MenuItem>
          ))
        ) : props.control.options && props.control.options.length > 0 ? (
          props.control.options?.map(o => (
            <MenuItem
              key={o[props.control?.optionValue ?? '']}
              value={o[props.control?.optionValue ?? '']}
            >
              {o[props.control?.optionLabel ?? '']}
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
