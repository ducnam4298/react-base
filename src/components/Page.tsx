import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

interface UIProps {
  children: React.ReactNode;
  title?: string;
}

const Page = forwardRef((props: UIProps, ref) => (
  <Box ref={ref}>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    {props.children}
  </Box>
));

export default Page;
