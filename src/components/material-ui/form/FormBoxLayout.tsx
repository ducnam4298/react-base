import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Stack, useTheme } from '@mui/material';
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
  const theme = useTheme();
  return (
    <Card className="nate-team-right-box">
      <CardHeader
        action={
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            {/* <Label theme={theme}>{props.title}</Label> */}
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

// const Label = styled.div<{ theme: Theme }>`
//   font-size: 14px;
//   font-weight: 600;
//   color: #323130;
//   margin: 0px;
//   padding: 5px 0px;
//   overflow-wrap: break-word;
//   display: flex;
//   align-items: center;
//   color: ${props => props.theme.palette.primary.main};
// `;
