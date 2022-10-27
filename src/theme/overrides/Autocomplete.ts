import { alpha, Theme } from '@mui/material';

const Autocomplete = (theme: Theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme['customShadows'].z20,
          '& .MuiAutocomplete-noOptions': {
            paddingTop: theme.spacing(0.75),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(0.75),
            paddingLeft: theme.spacing(2),
          }
        },
        listbox: {
          padding: 0,
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
