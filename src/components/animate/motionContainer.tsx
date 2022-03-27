import { motion, VariantLabels } from 'framer-motion';
import { Box } from '@mui/material';
import { varWrapEnter } from './variants';
import { Target } from 'framer-motion/types/types';

interface UIProps {
  open: boolean;
  children: React.ReactNode;
  initial?: boolean | Target | VariantLabels;
}

const MotionContainer = (props: UIProps) => {
  return (
    <Box
      component={motion.div}
      initial={props.initial}
      animate={props.open ? 'animate' : 'exit'}
      variants={varWrapEnter}
    >
      {props.children}
    </Box>
  );
};

export default MotionContainer;
