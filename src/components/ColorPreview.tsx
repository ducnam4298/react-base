import { alpha, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const RootStyle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const IconStyle = styled('div')(({ theme }) => ({
  marginLeft: -4,
  borderRadius: '50%',
  width: theme.spacing(2),
  height: theme.spacing(2),
  border: `solid 2px ${theme.palette.background.paper}`,
  boxShadow: `inset -1px 1px 2px ${alpha(theme.palette.common.black, 0.24)}`,
}));

interface UIProps {
  colors: any[];
  limit?: number | 3;
}

const ColorPreview = (props: UIProps) => {
  const limit = props.limit ?? 3;
  const showColor = props.colors.slice(0, limit);
  const moreColor = props.colors.length - limit;

  return (
    <RootStyle component="span">
      {showColor.map((color, index) => (
        <IconStyle key={color + index} sx={{ bgcolor: color }} />
      ))}

      {props.colors.length > limit && (
        <Typography variant="subtitle2">{`+${moreColor}`}</Typography>
      )}
    </RootStyle>
  );
};

export default ColorPreview;
