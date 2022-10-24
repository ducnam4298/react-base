import Page from 'components/Page';
import { Container, Typography } from '@mui/material';
import { Forms, validationSchema } from './config';
import { FormLayout } from 'components/material-ui';
import { RightOption } from 'common/models/enum';
import { useState } from 'react';

const listRightOptions: RightOption[] = [
  {
    title: 'Ảnh đại diện',
    show: true,
  },
  {
    title: 'Ảnh bìa',
    show: true,
  },
  {
    title: 'Tài liệu',
    show: true,
  },
];
const init = {
  fullName: undefined,
  phoneNumber: undefined,
  email: undefined,
  dob: undefined,
  address: undefined,
  gender: undefined,
  pob: undefined,
  description: undefined,
  active: undefined,
  profileImage: undefined,
  coverImage: undefined,
  contract: undefined,
};
const Form = () => {
  const [initialValues, ChangeInit] = useState(init);
  const onSave = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    ChangeInit(init);
  };
  return (
    <Page title="Form | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Form
        </Typography>
        <FormLayout
          form={Forms[0]}
          initialValues={initialValues}
          numberBox={listRightOptions.length}
          listRightOptions={listRightOptions}
          validationSchema={validationSchema}
          onSave={onSave}
          onReset={onReset}
        />
      </Container>
    </Page>
  );
};

export default Form;
