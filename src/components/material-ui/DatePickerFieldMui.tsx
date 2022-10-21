import { TextField, useTheme } from '@mui/material';
import { DatePicker, LocalizationProvider, PickersDay } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { IFormControl } from 'common/models/form';
import { Moment } from 'common/utils/moment';
import { FormikValues } from 'formik';
import moment from 'moment';
import { useState } from 'react';

interface UIProps {
  fullWidth?: boolean;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
  control: IFormControl;
  onChange?: (value: Date) => void;
  format?: string;
  error?: boolean;
  helperText?: string;
}

const DatePickerFieldMui = (props: UIProps) => {
  const [shrink, setShrink] = useState(false);
  const theme = useTheme();
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={props.control?.title}
        renderInput={ps => (
          <TextField
            {...ps}
            fullWidth={props.fullWidth}
            InputLabelProps={{
              ...ps.InputLabelProps,
              id: props.control?.id + 'date-outlined-label',
              shrink: props.formik.values[props.control.id] ? true : props.notched ?? shrink,
              htmlFor: props.control?.id + 'date-outlined',
            }}
            InputProps={{
              ...ps.InputProps,
              id: props.control?.id + 'date-outlined',
              onFocus: () => setShrink(true),
              onBlur: () => setShrink(false),
            }}
            inputProps={{ ...ps.inputProps, readOnly: true }}
            error={props.error}
            helperText={props.helperText}
            variant={props.variant ?? 'outlined'}
          />
        )}
        renderDay={(_, __, pickersDayProps) => (
          <PickersDay
            style={{
              border: pickersDayProps.today ? `1px solid ${theme.palette.primary.main}` : 'none',
            }}
            {...pickersDayProps}
          />
        )}
        inputFormat={props.format ?? 'DD/MM/YYYY'}
        onChange={value => props.onChange && props.onChange(moment(value).toDate())}
        value={
          props.formik.values[props.control.id]
            ? moment(props.formik.values[props.control.id])
            : null
        }
      />
    </LocalizationProvider>
  );
};

export default DatePickerFieldMui;
