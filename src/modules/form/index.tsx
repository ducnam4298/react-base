import {
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Page from 'components/Page';
import { useState } from 'react';

const Form = () => {
  const [shrink, setShrink] = useState<boolean>(false);
  // if notched is true then shrink does not execute
  const [notched] = useState<boolean>(true);
  return (
    <Page title="Form | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Form
        </Typography>
        <Stack direction="column" width="100%" gap={2}>
          <Stack direction="row" gap={3}>
            <TextField fullWidth label="Họ và tên" placeholder="Nhập họ và tên" />
            <FormControl fullWidth variant="outlined">
                <InputLabel
                  id="component-outlined-label"
                  shrink={notched ?? shrink}
                  htmlFor="component-outlined"
                >
                  Số điện thoại
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  notched={notched ?? shrink}
                  onFocus={e => setShrink(true)}
                  onBlur={e => setShrink(false)}
                />
              </FormControl>
          </Stack>
          <Stack direction="row" gap={3}>
            <TextField fullWidth label="Email" placeholder="Nhập email" />
            <TextField fullWidth label="Ngày sinh" placeholder="Chọn ngày sinh" />
          </Stack>
          <Stack direction="row" gap={3}>
            <TextField fullWidth label="Địa chỉ" placeholder="Nhập địa chỉ" />
            <TextField fullWidth label="Giới tính" placeholder="Chọn giới tính" />
          </Stack>
        </Stack>
      </Container>
    </Page>
  );
};

export default Form;
