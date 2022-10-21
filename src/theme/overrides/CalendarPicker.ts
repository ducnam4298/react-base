import { Theme } from '@mui/material';

const CalendarPicker = (theme: Theme) => {
  return {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          borderRadius: Number(theme.shape.borderRadius),
          border: `1px solid ${theme.palette.primary.main}`,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          '& .MuiPickersCalendarHeader-labelContainer': {},
        },
      },
    },
    MuiPickersFadeTransitionGroup: {
      styleOverrides: {
        root: {
          '& .MuiPickersCalendarHeader-label': {
            color: theme.palette.primary.main,
          },
          '& .MuiDayPicker-header': {
            color: theme.palette.primary.main,
            '& .MuiDayPicker-weekDayLabel': {
              color: theme.palette.primary.main,
            },
          },
        },
      },
    },
    PrivatePickersSlideTransition: {
      styleOverrides: {
        root: {
          background: '#fff',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
        },
      },
    },
    PrivatePickersYear: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
        },
      },
    },
  };
};

export default CalendarPicker;
