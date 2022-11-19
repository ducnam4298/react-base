import Page from 'components/Page';
import { Container, Typography } from '@mui/material';
import { Forms, validationSchema } from './config';
import { FormLayout } from 'components/material-ui/form/FormLayout';
import { GenderType, RightOption } from 'common/models/enum';
import { useState } from 'react';
import { Moment } from 'common/utils/moment';
import { IOption } from 'common/utils/optionMirror';
import { ButtonMui } from 'components/material-ui';

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
interface Init {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  dob?: Date;
  address?: string;
  gender?: GenderType;
  pob?: string;
  password?: string;
  rangeDateContract?: Date[];
  description?: string;
  active?: boolean;
  tags?: IOption[];
  profileImage?: any;
  coverImage?: any;
  contract?: any;
}
const initValues = {
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

const initNotValues = {
  fullName: undefined,
  phoneNumber: undefined,
  email: undefined,
  dob: undefined,
  address: undefined,
  gender: undefined,
  pob: undefined,
  password: undefined,
  rangeDateContract: undefined,
  description: undefined,
  active: true,
  tags: undefined,
  profileImage: undefined,
  coverImage: undefined,
  contract: undefined,
};
const Form = () => {
  const [initialValues, ChangeInit] = useState<Init>(initValues);
  const onSave = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    ChangeInit(initNotValues);
  };
  return (
    <Page title="Form | Minimal-UI">
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Form
        </Typography>
        <ButtonMui label="Change has values" onClick={() => ChangeInit(initValues)} />
        <ButtonMui
          label="Change hasn't values"
          variant="outlined"
          onClick={() => ChangeInit(initNotValues)}
        />
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
