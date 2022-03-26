import { Box, Checkbox } from '@mui/material';
import Iconify from './Iconify';
import { SxProps, Theme } from '@mui/system';

interface IconColorProps {
  sx: SxProps<Theme>;
}

const IconColor = (props: IconColorProps) => {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        display: 'flex',
        borderRadius: '50%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'currentColor',
        transition: theme =>
          theme.transitions.create('all', {
            duration: theme.transitions.duration.shortest,
          }),
        ...props.sx,
      }}
    >
      <Iconify icon="eva:checkmark-fill" sx={undefined} />
    </Box>
  );
};

interface UIProps {
  colors: any[];
  onChecked: (color:string) => boolean;
  sx: SxProps<Theme>;
}

const ColorManyPicker = (props: UIProps) => {
  return (
    <Box sx={props.sx}>
      {props.colors.map(color => {
        const isWhite = color === '#FFFFFF' || color === 'white';
        return (
          <Checkbox
            key={color}
            size="small"
            value={color}
            color="default"
            checked={props.onChecked(color)}
            icon={
              <IconColor
                sx={{
                  ...(isWhite && {
                    border: theme => `solid 1px ${theme.palette.divider}`,
                  }),
                }}
              />
            }
            checkedIcon={
              <IconColor
                sx={{
                  transform: 'scale(1.4)',
                  '&:before': {
                    opacity: 0.48,
                    width: '100%',
                    content: "''",
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    boxShadow: '4px 4px 8px 0 currentColor',
                  },
                  '& svg': { width: 12, height: 12, color: 'common.white' },
                  ...(isWhite && {
                    border: theme => `solid 1px ${theme.palette.divider}`,
                    boxShadow: theme => `4px 4px 8px 0 ${theme.palette.grey[500_24]}`,
                    '& svg': { width: 12, height: 12, color: 'common.black' },
                  }),
                }}
              />
            }
            sx={{
              color,
              '&:hover': { opacity: 0.72 },
            }}
          />
        );
      })}
    </Box>
  );
};

export default ColorManyPicker;
