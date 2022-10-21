import { Theme } from '@mui/material';

const SvgIcon = (theme: Theme) => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          '&.MuiSelect-icon': {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  };
};

export default SvgIcon;
