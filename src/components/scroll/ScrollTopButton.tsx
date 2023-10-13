import React, { useState } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return visible ? (
    <IconButton
      sx={{
        position: 'fixed',
        right: '1%',
        bottom: '1%',
        backgroundColor: 'primary.light',
        '&:hover': { backgroundColor: 'primary.main' },
      }}
    >
      <ArrowUpward sx={{ color: '#ffffff' }} onClick={() => scrollToTop()} />
    </IconButton>
  ) : (
    <></>
  );
};

export default ScrollTopButton;
