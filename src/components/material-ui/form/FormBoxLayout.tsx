import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Expand as ExpandIcon, Compress as CompressIcon } from '@mui/icons-material';
import './index.css';

interface UIProps {
  title?: string;
  required?: boolean;
  children?: React.ReactNode;
  show?: boolean;
}

const FormBoxLayout = (props: UIProps) => {
  const [isShow, setShow] = useState(props.show ?? true);
  const onToggle = () => setShow(!isShow);
  return (
    <Card className="nate-team-right-box">
      <CardHeader
        action={
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <CardContent
              style={{ width: '100%' }}
              className={`${!isShow ? 'box-hidden' : 'box-show'}`}
            >
              {isShow && props.children}
            </CardContent>
            <LoadingButton size="small" variant="outlined" onClick={() => onToggle()}>
              {!isShow ? <ExpandIcon /> : <CompressIcon />}
            </LoadingButton>
          </Stack>
        }
      />
    </Card>
  );
};

export default FormBoxLayout;
