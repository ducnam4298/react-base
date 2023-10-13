import { Popover, PopoverOrigin } from '@mui/material';
import React, { useState } from 'react';
interface UIProps {
  id: string;
  children: React.ReactNode;
  button: (
    open: boolean,
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  ) => React.ReactNode;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  style?: React.CSSProperties;
}
const PopoverMui = (props: UIProps) => {
  const { button } = props;
  const [anchorEl, setAnchorEl] = useState<Element>();
  const onOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(undefined);
  };
  const open = Boolean(anchorEl);
  const id = open ? props.id : undefined;
  return (
    <div style={{ ...props.style, height: props.style?.height ?? 20 }}>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => onClose()}
        PaperProps={{ elevation: 0, style: { backgroundColor: '#393D47' } }}
        anchorOrigin={{
          vertical: props.anchorOrigin?.vertical ?? 'top',
          horizontal: props.anchorOrigin?.horizontal ?? 'left',
        }}
        transformOrigin={{
          vertical: props.transformOrigin?.vertical ?? 'bottom',
          horizontal: props.transformOrigin?.horizontal ?? 'left',
        }}
      >
        {props.children}
      </Popover>
      {button(open, onOpen)}
    </div>
  );
};

export default PopoverMui;
