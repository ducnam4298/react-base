import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface UIProps {
  icon: any;
  sx?: SxProps<Theme>;
}

const Iconify = (props: UIProps) => {
  return <Box component={Icon} icon={props.icon} sx={{ ...props.sx }} />;
};

export default Iconify;
