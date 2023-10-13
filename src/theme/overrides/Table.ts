import { Theme } from '@mui/material';

const Table = (theme: Theme) => {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${theme.palette.primary.light}`,
        },
      },
    },
  };
};

export default Table;
