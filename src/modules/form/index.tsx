import Page from 'components/Page';
import { Container, Typography } from '@mui/material';
import { Forms, validationSchema } from './config';
import { FormLayout } from 'components/material-ui';
import { GenderType, RightOption } from 'common/models/enum';
import { useState } from 'react';
import { Moment } from 'common/utils/moment';

const listRightOptions: RightOption[] = [
  {
    title: '',
    show: true,
  },
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
  fullName: 'NamDZ',
  phoneNumber: '0356969828',
  email: 'ducnam4298@gmail.com',
  dob: new Date(1998, 1, 4),
  address: 'Lạng Sơn',
  gender: GenderType.Male,
  pob: '12',
  password: 'Khongconguoiyeu@123',
  rangeDateContract: [new Date(1998, 1, 4), Moment.DateCurrent()],
  description: '<p>Nam DZ</p>',
  active: true,
  tags: [{ value: 'develop', label: 'Develop' }],
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
