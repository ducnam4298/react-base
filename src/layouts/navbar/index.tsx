import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import Iconify from 'components/Iconify';
import SearchBar from './searchBar';
import AccountPopover from './accountPopover';
import LanguagePopover from './languagePopover';
import NotificationsPopover from './notificationsPopover';

const DRAWER_WIDTH = 249;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

interface UIProps {
  onOpenSidebar: () => void;
}

const Navbar = (props: UIProps) => {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={() => props.onOpenSidebar()}
          sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
};

export default Navbar;
