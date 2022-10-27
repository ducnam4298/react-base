import { alpha, Theme } from '@mui/material';

const Menu = (theme: Theme) => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 1,
            color: '#637381',
          },
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  };
};

export default Menu;
