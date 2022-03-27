import { Link as RouterLink } from 'react-router-dom';
import { Box, SxProps, Theme } from '@mui/material';

interface UIProps {
  sx?: SxProps<Theme>;
}

export default function Logo(props: UIProps) {
  return (
    <RouterLink to="/">
      <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...props.sx }} />
    </RouterLink>
  );
}
