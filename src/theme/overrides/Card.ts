import { Theme } from '@mui/material';

const Card = (theme: Theme) => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme['customShadows'].z3,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          '& .MuiCardHeader-action': {
            width: '100%',
            marginTop: theme.spacing(-0.5),
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(-0.5),
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          '&:last-child': {
            paddingBottom: theme.spacing(1),
          },
        },
      },
    },
  };
};

export default Card;
