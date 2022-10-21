import { IOption } from 'common/utils/optionMirror';

export interface IForm {
  mode?: IFormMode;
  code?: string;
  title?: string;
  description?: string;
  dataType?: string;
  rows?: IFormRow[];
  parentKey?: any;
}

export interface IFormRow {
  title?: string;
  controls?: IFormControl[];
}

export interface IFormControl {
  id: string;
  title?: string;
  placeholder?: string;
  type: ControlType;
  fullWidth?: boolean;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  choiceDisplay?: ChoiceType;
  required?: boolean;
  readOnly?: boolean;
  default?: any;
  multiple?: boolean;
  multiline?: boolean;
  rows?: number;
  max?: number;
  min?: number;
  maxLength?: number;
  options?: IOption[];
  inputMask?: string;
  boxNumber?: number;
  accept?: string | string[];
}
export enum IFormMode {
  None,
  Add,
  Edit,
  Remove,
  Upload,
}

export enum ControlType {
  Text = 'text',
  Password = 'password',
  Number = 'number',
  Date = 'date',
  Toggle = 'toggle',
  Choice = 'choice',
  Enum = 'enum',
  Attachment = 'attachment',
  Note = 'note',
  Link = 'link',
  InputMask = 'inputMask',
  Editor = 'editor',
  Tag = 'tag',
  Picker = 'picker',
  Language = 'language',
}
export enum ChoiceType {
  ComboBox,
  Dropdown,
  Checkbox,
  Radio,
  Suggest,
  Image,
  File,
}

export enum IFormAuthAction {
  None = 0,
  Signin,
  Signup,
  Signout,
  Forgot,
  Activation,
  SetPassword,
}
