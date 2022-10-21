import Page from 'components/Page';
import { Container, Typography } from '@mui/material';
import { Forms, validationSchema } from './config';
import { FormLayout } from 'components/material-ui';
import { RightOption } from 'common/models/enum';

const listRightOptions: RightOption[] = [
  {
    title: 'Ảnh đại diện',
    required: true,
    show: true,
  },
  {
    title: 'Ảnh bìa',
    required: true,
    show: true,
  },
  {
    title: 'Tài liệu',
    required: true,
    show: true,
  },
];

const Form = () => {
  const onSave = (values: any) => {
    console.log(values);
  };
  return (
    <Page title="Form | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Form
        </Typography>
        <FormLayout
          form={Forms[0]}
          initialValues={{
            fullName: undefined,
            phoneNumber: undefined,
            email: undefined,
            dob: undefined,
            gender: undefined,
            coverImage: undefined,
            profileImage: undefined,
            contract: undefined,
            address: undefined,
            pob: undefined,
          }}
          numberBox={listRightOptions.length}
          listRightOptions={listRightOptions}
          validationSchema={validationSchema}
          onSave={onSave}
        />
      </Container>
    </Page>
  );
};

export default Form;
