import styled from '@emotion/styled/macro';
import { Box, Drawer, SxProps, Theme } from '@mui/material';
import { FlexBoxBetween, Title } from 'common/styles';
import { useTranslation } from 'react-i18next';

interface UIProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  anchor?: 'bottom' | 'left' | 'right' | 'top';
  background?: string;
  width?: string | number;
  height?: string | number;
  p?: number;
  borderRadius?: string | number;
  tinyBox?: boolean;
}

const DrawerMui = (props: UIProps) => {
  const { t } = useTranslation();
  const sx: SxProps<Theme> = {
    width: props.width ?? '100%',
    height: props.height ?? 600,
    background: props.background ?? '#292b30',
    boxShadow: 24,
    p: props.p,
    borderRadius: props.borderRadius ?? '5px 5px 0 0',
  };
  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      anchor={props.anchor ?? 'bottom'}
      ModalProps={{ style: { height: 0 } }}
      BackdropProps={{ style: { background: 'none' } }}
      PaperProps={{ elevation: 0, style: { backgroundColor: 'transparent', overflow: 'hidden' } }}
    >
      {props.tinyBox ? (
        <Box sx={{ background: '#1A1D23', paddingBottom: '32px' }}>{props.children}</Box>
      ) : (
        <Box sx={sx}>
          <FlexBoxBetween>
            {props.title && <Title style={{ borderRadius: '5px 5px 0 0' }}>{t(props.title)}</Title>}
            <Div onClick={() => props.onClose()}>
              <IconClose />
            </Div>
          </FlexBoxBetween>
          {props.children}
        </Box>
      )}
    </Drawer>
  );
};

export default DrawerMui;
const Div = styled.div``;
const IconClose = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  width: 25px;
  height: 25px;
  opacity: 0.7;
  background: #434853;
  border-radius: 5px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:before,
  &:after {
    position: absolute;
    left: 12px;
    top: 3px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #ffffff;
  }
  :before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
