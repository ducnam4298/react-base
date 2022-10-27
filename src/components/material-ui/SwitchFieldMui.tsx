import { FormControl, FormControlLabel, FormHelperText, Switch, useTheme } from '@mui/material';
import { IFormControl } from 'common/models/form';
import { FormikValues } from 'formik';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
  control: IFormControl;
  onChange?: (value: boolean) => void;
  error?: boolean;
  helperText?: string;
}

const SwitchFieldMui = (props: UIProps) => {
  const theme = useTheme();
  return (
    <FormControl fullWidth={props.fullWidth} variant={props.variant ?? 'outlined'}>
      <FormControlLabel
        label={props.control.title}
        sx={{
          justifyContent: 'flex-end',
          gap: '10px',
          '& .MuiFormControlLabel-label': {
            color: props.error ? theme.palette.error.main : theme.palette.primary.main,
          },
        }}
        control={
          <Switch
            edge="end"
            size={props.control.size}
            value={props.formik.values[props.control.id]}
            onChange={e => props.onChange && props.onChange(e.target.checked)}
          />
        }
      />
      {props.helperText && (
        <FormHelperText
          style={{ textAlign: 'end' }}
          error={props.error}
          id={props.control?.id + '-helper-text'}
        >
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SwitchFieldMui;
