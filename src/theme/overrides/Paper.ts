import { Theme } from '@mui/material';

const Paper = (theme: Theme) => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  };
};

export default Paper;
