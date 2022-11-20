import { ChoiceType, ControlType, IForm } from 'common/models/form';
import { GenderOptions } from 'common/utils/optionMirror';
import { regex } from 'common/utils/regex';
import city from '_mocks_/cities';
import * as Yup from 'yup';
import { isArray } from 'lodash';

export const FieldName = {
  FullName: 'fullName',
  PhoneNumber: 'phoneNumber',
  Email: 'email',
  Dob: 'dob',
  Gender: 'gender',
  Address: 'address',
  Pob: 'pob',
  Password: 'password',
  Job: 'job',
  Tags: 'tags',
  RangeDateContract: 'rangeDateContract',
  Description: 'description',
  Active: 'active',
  ProfileImage: 'profileImage',
  CoverImage: 'coverImage',
  Contract: 'contract',
};

const FieldRequired = 'Field required';
const FieldSoShort = 'Field so short';
const FieldSoLong = 'Field so long';
const PhoneNumberNotExist = 'Phone Number not exist';
const EmailInvalid = 'Email invalid';
const PassWordLength = 'At least 8 characters';
const PasswordWrong = 'Password must contain uppercase, lowercase and @$!%*?&';
const MinArray = 'Must choose at least one option';
const WhiteSpace = 'Field not white space';
const FileSize = 'File too large ';
const FileType = 'File wrong type ';

const doc = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const pp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
const xls = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const acceptFile = [doc, xls, pp];
const acceptImage = ['image/png', 'image/jpg', 'image/jpeg'];

const FilesSizeTooLarge = (files?: File | File[]) => {
  let valid = true;
  if (!files) return valid;
  if (isArray(files)) {
    files.map(file => {
      const size = file.size / 1024 / 1024;
      if (size > 10) valid = false;
    });
    return valid;
  } else {
    const file = files as unknown as File;
    const size = file.size / 1024 / 1024;
    if (size > 10) valid = false;
    return valid;
  }
};
const FilesCorrectType = (accepts: string[], files?: File | File[]) => {
  let valid = true;
  if (!files) return valid;
  if (isArray(files)) {
    files.map(file => {
      if (!accepts.includes(file.type)) {
        valid = false;
      }
    });
    return valid;
  } else {
    const file = files as unknown as File;
    if (file && !accepts.includes(file.type)) {
      valid = false;
    }
    return valid;
  }
};

export const validationSchema = Yup.object().shape({
  [FieldName.FullName]: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .min(3, FieldSoShort)
    .max(60, FieldSoLong),
  [FieldName.PhoneNumber]: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .matches(regex.phoneRegex, PhoneNumberNotExist),
  [FieldName.Email]: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .matches(regex.email, EmailInvalid)
    .max(100, FieldSoLong),
  [FieldName.Dob]: Yup.date()
    .required(FieldRequired)
    .test(schema => {
      if (schema instanceof Date) return true;
      else return false;
    })
    .typeError(FieldRequired),
  [FieldName.Gender]: Yup.string().required(FieldRequired).trim(WhiteSpace),
  [FieldName.Address]: Yup.string().required(FieldRequired).trim(WhiteSpace),
  [FieldName.Pob]: Yup.string().required(FieldRequired).trim(WhiteSpace),
  [FieldName.Password]: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .min(8, PassWordLength)
    .matches(regex.passwordRegExp, PasswordWrong),
  [FieldName.Job]: Yup.array().required(FieldRequired).min(1, MinArray),
  [FieldName.RangeDateContract]: Yup.array()
    .required(FieldRequired)
    .of(
      Yup.date()
        .required(FieldRequired)
        .test(schema => {
          if (schema instanceof Date) return true;
          else return false;
        })
        .typeError(FieldRequired)
    ),
  [FieldName.Description]: Yup.string().required(FieldRequired).trim(WhiteSpace),
  [FieldName.Active]: Yup.boolean().required(FieldRequired),
  [FieldName.ProfileImage]: Yup.mixed()
    .required(FieldRequired)
    .test('files', FileSize + 'less 10MB', value => FilesSizeTooLarge(value as File))
    .test('files', FileType + acceptImage.join(','), value =>
      FilesCorrectType(acceptImage, value as File)
    ),
  [FieldName.CoverImage]: Yup.mixed()
    .required(FieldRequired)
    .test('files', FileSize + 'less 10MB', value => FilesSizeTooLarge(value as File))
    .test('files', FileType + acceptImage.join(','), value =>
      FilesCorrectType(acceptImage, value as File)
    ),
  [FieldName.Contract]: Yup.array()
    .required(FieldRequired)
    .test('files', FileSize + 'less 10MB', value => FilesSizeTooLarge(value as File[]))
    .test('files', FileType + acceptFile.join(','), value =>
      FilesCorrectType(acceptFile, value as File[])
    ),
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
            id: FieldName.PhoneNumber,
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
            id: FieldName.Email,
            type: ControlType.Text,
            title: 'Email',
            fullWidth: true,
            boxNumber: 0,
          },
          {
            id: FieldName.Dob,
            type: ControlType.Date,
            choiceDisplay: ChoiceType.Date,
            title: 'Ngày sinh',
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
      {
        controls: [
          {
            id: FieldName.Pob,
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Autocomplete,
            title: 'Nơi sinh',
            fullWidth: true,
            options: city.cities,
            optionLabel: 'label',
            optionValue: 'value',
            multiple: false,
            boxNumber: 0,
          },
          {
            id: FieldName.Password,
            type: ControlType.Password,
            title: 'Mật khẩu',
            fullWidth: true,
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: FieldName.Job,
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Select,
            title: 'Công việc',
            fullWidth: true,
            options: [
              { value: 'develop', label: 'Develop' },
              { value: 'leader', label: 'Leader' },
              { value: 'ba', label: 'BA' },
              { value: 'pm', label: 'PM' },
            ],
            optionLabel: 'label',
            optionValue: 'value',
            multiple: true,
            boxNumber: 0,
          },
          {
            id: FieldName.Tags,
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Autocomplete,
            title: 'Hashtag',
            fullWidth: true,
            options: [
              { value: 'develop', label: 'Develop' },
              { value: 'leader', label: 'Leader' },
              { value: 'ba', label: 'BA' },
              { value: 'pm', label: 'PM' },
            ],
            optionLabel: 'label',
            optionValue: 'value',
            multiple: true,
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: FieldName.RangeDateContract,
            type: ControlType.Date,
            choiceDisplay: ChoiceType.RangeDate,
            title: 'Thời hạn hợp đồng',
            fullWidth: true,
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: FieldName.Description,
            type: ControlType.Editor,
            title: 'Mô tả',
            fullWidth: true,
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: FieldName.Active,
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
            id: FieldName.ProfileImage,
            title: 'Ảnh đại diện',
            type: ControlType.Attachment,
            choiceDisplay: ChoiceType.Image,
            multiple: false,
            accept: acceptImage,
            boxNumber: 1,
          },
        ],
      },
      {
        controls: [
          {
            id: FieldName.CoverImage,
            title: 'Ảnh bìa',
            type: ControlType.Attachment,
            choiceDisplay: ChoiceType.Image,
            multiple: false,
            accept: acceptImage,
            boxNumber: 2,
          },
        ],
      },
      {
        controls: [
          {
            id: FieldName.Contract,
            title: 'Tài liệu',
            type: ControlType.Attachment,
            choiceDisplay: ChoiceType.File,
            multiple: false,
            accept: acceptFile,
            boxNumber: 3,
          },
        ],
      },
    ],
  },
];
