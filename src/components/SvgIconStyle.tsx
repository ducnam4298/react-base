import { Box, SxProps, Theme } from '@mui/material';
interface UIProps {
  src: string;
  color: string;
  sx?: SxProps<Theme>;
}

const SvgIconStyle = (props: UIProps) => {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mask: `url(${props.src}) no-repeat center / contain`,
        WebkitMask: `url(${props.src}) no-repeat center / contain`,
        bgcolor: `${props.color ?? 'inherit'}.main`,
        ...(props.color === 'inherit' && { bgcolor: 'currentColor' }),
        ...(props.color === 'action' && { bgcolor: 'action.active' }),
        ...(props.color === 'disabled' && { bgcolor: 'action.disabled' }),
        ...(props.color === 'paper' && { bgcolor: 'background.paper' }),
        ...props.sx,
      }}
    />
  );
};

export default SvgIconStyle;
