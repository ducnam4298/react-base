import { ChoiceType, ControlType, IForm } from 'common/models/form';
import { GenderOptions } from 'common/utils/optionMirror';
import * as Yup from 'yup';
import Cities from 'assets/data/cities.json';
import { regex } from 'common/utils/regex';

const FieldRequired = 'Field Required';
const FieldSoShort = 'Field so short';
const FieldSoLong = 'Field so long';
const PhoneNumberNotExist = 'Phone Number not exist';
const EmailInvalid = 'Email invalid';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(3, FieldSoShort).max(60, FieldSoLong).required(FieldRequired),
  phoneNumber: Yup.string().matches(regex.phoneRegex, PhoneNumberNotExist).required(FieldRequired),
  email: Yup.string().email(EmailInvalid).max(100, FieldSoLong).required(FieldRequired),
  dob: Yup.string().required(FieldRequired),
  gender: Yup.string().required(FieldRequired),
  coverImage: Yup.string().required(FieldRequired),
  profileImage: Yup.string().required(FieldRequired),
  contract: Yup.array().nullable(false).required(FieldRequired),
  description: Yup.string().required(FieldRequired),
  address: Yup.string().required(FieldRequired),
  pob: Yup.string().required(FieldRequired),
  active: Yup.boolean().required(FieldRequired),
});

export const Forms: IForm[] = [
  {
    code: 'Create',
    rows: [
      {
        controls: [
          {
            id: 'fullName',
            type: ControlType.Text,
            title: 'Họ và tên',
            fullWidth: true,
            placeholder: 'Nhập họ và tên',
            boxNumber: 0,
          },
          {
            id: 'phoneNumber',
            type: ControlType.Text,
            title: 'Số điện thoại',
            fullWidth: true,
            placeholder: 'Nhập số điện thoại',
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: 'email',
            type: ControlType.Text,
            title: 'Email',
            fullWidth: true,
            placeholder: 'Nhập email',
            boxNumber: 0,
          },
          {
            id: 'dob',
            type: ControlType.Date,
            title: 'Ngày sinh',
            fullWidth: true,
            placeholder: 'Chọn ngày sinh',
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: 'gender',
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Select,
            title: 'Giới tính',
            fullWidth: true,
            placeholder: 'Chọn giới tính',
            options: GenderOptions,
            boxNumber: 0,
          },
          {
            id: 'address',
            type: ControlType.Text,
            title: 'Địa chỉ',
            fullWidth: true,
            placeholder: 'Nhập địa chỉ',
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: 'pob',
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Autocomplete,
            title: 'Nơi sinh',
            fullWidth: true,
            placeholder: 'Nhập hoặc chọn nơi sinh',
            default: Cities[0].value,
            options: Cities,
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: 'description',
            type: ControlType.Editor,
            title: 'Mô tả',
            fullWidth: true,
            placeholder: 'Nhập mô tả',
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: 'active',
            type: ControlType.Toggle,
            title: 'Kích hoạt',
            fullWidth: true,
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: 'tag',
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Autocomplete,
            title: 'Hashtag',
            fullWidth: true,
            placeholder: 'Nhập hoặc chọn hashtag',
            options: [],
            boxNumber: 1,
          },
        ],
      },
      {
        controls: [
          {
            id: 'profileImage',
            title: 'Ảnh đại diện',
            type: ControlType.Attachment,
            choiceDisplay: ChoiceType.Image,
            multiple: false,
            accept: ['.png', '.jpg', '.jpeg'],
            boxNumber: 2,
          },
        ],
      },
      {
        controls: [
          {
            id: 'coverImage',
            title: 'Ảnh bìa',
            type: ControlType.Attachment,
            choiceDisplay: ChoiceType.Image,
            multiple: false,
            accept: ['.png', '.jpg', '.jpeg'],
            boxNumber: 3,
          },
        ],
      },
      {
        controls: [
          {
            id: 'contract',
            title: 'Tài liệu',
            type: ControlType.Attachment,
            choiceDisplay: ChoiceType.File,
            multiple: false,
            accept: ['.doc', '.docx', '.xls', '.xlsx'],
            boxNumber: 4,
          },
        ],
      },
    ],
  },
];
