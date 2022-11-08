import { ChoiceType, ControlType, IForm } from 'common/models/form';
import { GenderOptions } from 'common/utils/optionMirror';
import { regex } from 'common/utils/regex';
import city from '_mocks_/cities';
import * as Yup from 'yup';

const FieldRequired = 'Field required';
const FieldSoShort = 'Field so short';
const FieldSoLong = 'Field so long';
const PhoneNumberNotExist = 'Phone Number not exist';
const EmailInvalid = 'Email invalid';
const WhiteSpace = 'Field not white space';
// const FileSize = 'File too large';
// const FileType = 'File wrong type';

const acceptFile = ['.doc', '.docx', '.xls', '.xlsx'];
const acceptImage = ['.png', '.jpg', '.jpeg'];

// const FilesSizeTooLarge = (files?: [File]) => {
//   let valid = true;
//   if (files) {
//     files.map(file => {
//       const size = file.size / 1024 / 1024;
//       if (size > 10) {
//         valid = false;
//       }
//     });
//   }
//   return valid;
// };
// const FilesCorrectType = (files?: [File]) => {
//   let valid = true;
//   if (files) {
//     files.map(file => {
//       if (!acceptFile.includes(file.type)) {
//         valid = false;
//       }
//     });
//   }
//   return valid;
// };

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .min(3, FieldSoShort)
    .max(60, FieldSoLong),
  phoneNumber: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .matches(regex.phoneRegex, PhoneNumberNotExist),
  email: Yup.string()
    .required(FieldRequired)
    .trim(WhiteSpace)
    .matches(regex.email, EmailInvalid)
    .max(100, FieldSoLong),
  dob: Yup.date()
    .required(FieldRequired)
    .test(schema => {
      if (schema instanceof Date) return true;
      else return false;
    })
    .typeError(FieldRequired),
  gender: Yup.string().trim(WhiteSpace).required(FieldRequired),
  address: Yup.string().trim(WhiteSpace).required(FieldRequired),
  pob: Yup.string().trim(WhiteSpace).required(FieldRequired),
  // rangeDateContract: Yup.array()
  //   .required(FieldRequired)
  //   .of(
  //     Yup.date()
  //       .test(schema => {
  //         if (schema instanceof Date) return true;
  //         else return false;
  //       })
  //       .typeError(FieldRequired)
  //   ),
  description: Yup.string().trim(WhiteSpace).required(FieldRequired),
  active: Yup.boolean().required(FieldRequired),
  coverImage: Yup.string().trim(WhiteSpace).required(FieldRequired),
  profileImage: Yup.string().trim(WhiteSpace).required(FieldRequired),
  contract: Yup.array().nullable(false).required(FieldRequired),
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
            choiceDisplay: ChoiceType.Date,
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
            options: city.cities,
            multiple: false,
            boxNumber: 0,
          },
          {
            id: 'password',
            type: ControlType.Password,
            title: 'Mật khẩu',
            fullWidth: true,
            placeholder: 'Nhập mật khẩu',
            boxNumber: 0,
          },
        ],
      },
      {
        controls: [
          {
            id: 'rangeDateContract',
            type: ControlType.Date,
            choiceDisplay: ChoiceType.RangeDate,
            title: 'Thời hạn hợp đồng',
            fullWidth: true,
            placeholder: 'Chọn thời gian',
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
            id: 'tags',
            type: ControlType.Choice,
            choiceDisplay: ChoiceType.Autocomplete,
            title: 'Hashtag',
            fullWidth: true,
            placeholder: 'Nhập hoặc chọn hashtag',
            options: [
              { value: 'develop', label: 'Develop' },
              { value: 'leader', label: 'Leader' },
              { value: 'ba', label: 'BA' },
              { value: 'pm', label: 'PM' },
            ],
            multiple: true,
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
            accept: acceptImage,
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
            accept: acceptImage,
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
            accept: acceptFile,
            boxNumber: 4,
          },
        ],
      },
    ],
  },
];
