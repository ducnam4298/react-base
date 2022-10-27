import { Theme } from '@mui/material';

const Chip = (theme: Theme) => {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          '& .MuiChip-label': {
            color: '#ffffff',
          },
          '& .MuiChip-deleteIcon': {
            color: theme.palette.primary.dark,
            '&:hover': {
              color: theme.palette.primary.light,
            },
          },
        },
      },
    },
  };
};

export default Chip;
