import { Box, Modal, SxProps, Theme } from '@mui/material';
import { Title } from 'common/styles';
import { useTranslation } from 'react-i18next';

interface UIProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  background?: string;
  width?: string | number;
  height?: string | number;
  p?: number;
  borderRadius?: string | number;
}

const ModalMui = (props: UIProps) => {
  const { t } = useTranslation();
  const sx: SxProps<Theme> = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    float: 'left',
    width: props.width ?? 400,
    height: props.height,
    background: props.background ?? '#ffffff',
    boxShadow: 24,
    p: props.p ?? 4,
    borderRadius: props.borderRadius ?? 5,
  };
  return (
    <Modal
      open={props.open}
      onClose={() => props.onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={sx}>
        {props.title && <Title>{t(props.title)}</Title>}
        {props.children}
      </Box>
    </Modal>
  );
};

export default ModalMui;
