import { IconButton, InputAdornment, Stack, TextField, useTheme } from '@mui/material';
import { DateRangePicker, LocalizationProvider, DateRangePickerDay } from '@mui/x-date-pickers-pro';
import { AdapterMoment } from '@mui/x-date-pickers-pro/AdapterMoment';
import { MuiTextFieldProps } from '@mui/x-date-pickers/internals/components/PureDateInput';
import { IFormControl } from 'common/models/form';
import EventIcon from '@mui/icons-material/Event';
import { FormikValues } from 'formik';
import moment from 'moment';
import { useRef } from 'react';
interface UIProps {
  fullWidth?: boolean;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
  control: IFormControl;
  onChange?: (value: [Date, Date]) => void;
  format?: string;
  error?: boolean;
  helperText?: string;
}

enum Target {
  Start = 1,
  End = 2,
}

interface InputProps {
  ps: MuiTextFieldProps;
  target: Target;
}

const RangePickerFieldMui = (props: UIProps) => {
  const theme = useTheme();
  const CheckTarget = (target: Target) => {
    return target === Target.Start ? true : false;
  };
  const CompareTarget = (target: Target) => {
    return target !== Target.Start ? 'end' : 'start';
  };
  const CompareTargetText = (target: Target) => {
    return target !== Target.Start ? 'kết thúc' : 'bắt đầu';
  };
  const startRef = useRef<any>();
  const endRef = useRef<any>();
  const Input = ({ ps, target }: InputProps) => (
    <TextField
      {...ps}
      inputRef={CheckTarget(target) ? startRef : endRef}
      fullWidth={props.fullWidth}
      InputLabelProps={{
        id: props.control?.id + `${CompareTarget(target)}-date-outlined-label`,
        shrink: !!props.formik.values[props.control.id],
        htmlFor: props.control?.id + `${CompareTarget(target)}-date-outlined`,
      }}
      InputProps={{
        size: props.control.size,
        id: props.control?.id + `${CompareTarget(target)}-date-outlined`,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ width: 40, height: 40, minWidth: 40 }}>
              <EventIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      inputProps={{
        ...ps.inputProps,
        placeholder: props.control?.title
          ? `Chọn ${props.control?.title.toLowerCase()} ${CompareTargetText(target)}`
          : '',
        readOnly: true,
        autoComplete: 'off',
      }}
      error={props.error}
      helperText={props.helperText}
      variant={props.variant ?? 'outlined'}
    />
  );
  return (
    <LocalizationProvider
      dateAdapter={AdapterMoment}
      localeText={{
        start: `${props.control?.title ?? ''} bắt đầu`,
        end: `${props.control?.title ?? ''} kết thúc`,
      }}
    >
      <DateRangePicker
        label={props.control?.title}
        calendars={1}
        value={
          props.formik.values[props.control.id]
            ? [
                moment(props.formik.values[props.control.id][0]),
                moment(props.formik.values[props.control.id][1]),
              ]
            : [null, null]
        }
        onChange={values =>
          props.onChange && props.onChange([moment(values[0]).toDate(), moment(values[1]).toDate()])
        }
        renderInput={(startProps, endProps) => (
          <Stack direction="row" width={props.fullWidth ? '100%' : 'auto'} gap={1.25}>
            <Input ps={startProps} target={Target.Start} />
            <Input ps={endProps} target={Target.End} />
          </Stack>
        )}
        renderDay={(_, dateRangePickerDayProps) => (
          <DateRangePickerDay
            style={{
              border: dateRangePickerDayProps.today
                ? `1px solid ${theme.palette.primary.main}`
                : 'none',
            }}
            {...dateRangePickerDayProps}
          />
        )}
        inputFormat={props.format ?? 'DD/MM/YYYY'}
      />
    </LocalizationProvider>
  );
};

export default RangePickerFieldMui;
