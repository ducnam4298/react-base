import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface UIProps {
  fullWidth?: boolean;
  label?: string;
  variant?: 'outlined' | 'contained';
  onClick: () => void;

  link?: boolean;
  to?: string;

  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const ButtonMui = (props: UIProps) => {
  return (
    <Button
      fullWidth={props.fullWidth}
      component={props.link ? RouterLink : Button}
      to={props.to ?? '#'}
      size={props.size}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      variant={props.variant ?? 'contained'}
    >
      {props.label}
      {props.children}
    </Button>
  );
};

export default ButtonMui;
