import { alpha, Theme } from '@mui/material';

const Autocomplete = (theme: Theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme['customShadows'].z20,
          '& .MuiAutocomplete-noOptions': {
            padding: `${theme.spacing(2)} ${theme.spacing(1.5)}`,
          },
        },
        listbox: {
          padding: `${theme.spacing(2)} ${theme.spacing(1.5)}`,
          '& .MuiAutocomplete-option': {
            width: `calc(100% - ${theme.spacing(3)}) !important`,
            left: `${theme.spacing(1.5)} !important`,
          },
          '& .MuiAutocomplete-option.Mui-focused': {
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

export default Autocomplete;
