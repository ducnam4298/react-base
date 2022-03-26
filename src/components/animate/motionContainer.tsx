import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { varWrapEnter } from './variants';

interface UIProps {
  open: boolean;
  children: React.ReactNode;
}

const MotionContainer = (props: UIProps) => {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={props.open ? 'animate' : 'exit'}
      variants={varWrapEnter}
    >
      {props.children}
    </Box>
  );
};

export default MotionContainer;
