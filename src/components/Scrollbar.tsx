import SimpleBarReact from 'simplebar-react';
import { alpha, styled, SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

const RootStyle = styled('div')({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

interface UIProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Scrollbar = (props: UIProps) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return isMobile ? (
    <Box sx={{ overflowX: 'auto', ...props.sx }}>{props.children}</Box>
  ) : (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={props.sx}>
        {props.children}
      </SimpleBarStyle>
    </RootStyle>
  );
};

export default Scrollbar;
