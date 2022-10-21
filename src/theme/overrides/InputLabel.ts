import { Theme } from '@mui/system';

const InputLabel = (theme: Theme) => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
        },
      },
    },
  };
};

export default InputLabel;
