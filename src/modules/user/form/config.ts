import { ChoiceType, ControlType, IForm } from 'common/models/form';
import { GenderOptions } from 'common/utils/optionMirror';
import { regex } from 'common/utils/regex';
import city from '_mocks_/cities';
import * as Yup from 'yup';
import { isArray } from 'lodash';

export const FieldName = {
  FullName: 'fullName',
  Phone: 'phone',
  Dob: 'dob',
  Gender: 'gender',
  Address: 'address',
};
const FieldRequired = 'Field required';
const FieldSoShort = 'Field so short';
const FieldSoLong = 'Field so long';
const PhoneNumberNotExist = 'Phone Number not exist';
const WhiteSpace = 'Field not white space';

export const validationSchema = Yup.object().shape({
  [FieldName.FullName]: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .min(3, FieldSoShort)
    .max(60, FieldSoLong),
  [FieldName.Phone]: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .matches(regex.phoneRegex, PhoneNumberNotExist),
  [FieldName.Gender]: Yup.string().required(FieldRequired).trim(WhiteSpace),
  [FieldName.Address]: Yup.string().required(FieldRequired).trim(WhiteSpace),
});

export const Forms: IForm[] = [
  {
    code: 'Create',
    rows: [
      {
        controls: [
          {
            id: FieldName.FullName,
            type: ControlType.Text,
            title: 'Họ và tên',
            fullWidth: true,
            boxNumber: 0,
          },
          {
            id: FieldName.Phone,
            type: ControlType.Text,
            title: 'Số điện thoại',
            fullWidth: true,
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: FieldName.Gender,
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Select,
            title: 'Giới tính',
            fullWidth: true,
            options: GenderOptions,
            optionLabel: 'label',
            optionValue: 'value',
            multiple: false,
            boxNumber: 0,
          },
          {
            id: FieldName.Address,
            type: ControlType.Text,
            title: 'Địa chỉ',
            fullWidth: true,
            boxNumber: 0,
          },
        ],
      },
    ],
  },
];
