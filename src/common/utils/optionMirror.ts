import {
  ContentType,
  GenderType,
  LanguageCode,
  StatusGlobal,
  VisiblePost,
} from 'common/models/enum';
import { ControlType } from 'common/models/form';

export const ConvertType = (typeEnum: ControlType) => {
  switch (typeEnum) {
    case ControlType.Date:
      return 'date';
    case ControlType.Attachment:
      return 'file';
    case ControlType.Toggle:
      return 'radio';
    case ControlType.Password:
      return 'password';
    case ControlType.Choice:
      return 'checkbox';
    case ControlType.Number:
      return 'number';
    default:
      return 'text';
  }
};

export const RenderSymbol = {
  NEXT: '&rsaquo;',
  NEXT_END: '&raquo;',
  PREVIOUS: '&lsaquo;',
  LAST_PREVIOUS: '&laquo;',
};
export interface IOption {
  value?: string;
  label?: string;
}

export const VisibleOptions: IOption[] = [
  {
    value: VisiblePost.Public,
    label: 'Public',
  },
  {
    value: VisiblePost.Private,
    label: 'Private',
  },
];

export const ContentTypeOptions: IOption[] = [
  {
    value: ContentType.Text,
    label: 'Text',
  },
  {
    value: ContentType.Image,
    label: 'Image',
  },
  {
    value: ContentType.Video,
    label: 'Video',
  },
  {
    value: ContentType.Multi,
    label: 'Multi',
  },
];

export const StatusGlobalOption: IOption[] = [
  {
    value: StatusGlobal.Draft,
    label: 'Draft',
  },
  {
    value: StatusGlobal.Public,
    label: 'Public',
  },
  {
    value: StatusGlobal.Hide,
    label: 'Hide',
  },
];

export const GenderOptions: IOption[] = [
  {
    value: GenderType.Male,
    label: 'Male',
  },
  {
    value: GenderType.Female,
    label: 'Female',
  },
  {
    value: GenderType.Other,
    label: 'Other',
  },
];

export const LanguageOptions: IOption[] = [
  {
    value: LanguageCode.EN,
    label: 'English',
  },
  {
    value: LanguageCode.FR,
    label: 'French',
  },
];

const OptionMirror = class {
  RenderDate(key?: Date | any) {
    return key
      ? key.toLocaleDateString('vi-VN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : '';
  }

  VisiblePost(value: string) {
    const option = VisibleOptions.find(e => e.value === value);
    return option ? option.label : '';
  }

  ContentType(value: string) {
    const option = ContentTypeOptions.find(e => e.value === value);
    return option ? option.label : '';
  }

  Status(value: string) {
    const option = StatusGlobalOption.find(e => e.value === value);
    return option ? option.label : '';
  }

  Gender(value?: string) {
    const option = GenderOptions.find(e => e.value === value);
    return option ? option.label : '';
  }
  // format số 1000000 => 1,000,000
  FormatComa(n: number) {
    return n && n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  // format số 1000000 => 1.000.000
  FormatDot(n: number) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  FormatDateInput(n: string) {
    if (n.match(/^\d{2}$/) !== null) {
      return n + '/';
    } else if (n.match(/^\d{2}\/\d{2}$/) !== null) {
      return n + '/';
    } else return n;
  }

  CheckImageUrl(url: string) {
    return url.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null;
  }

  ShortedTitle(text: string, maxWord: number) {
    const splitText = text?.split(' ');
    if (splitText?.length === 1) return splitText[0].slice(0, 20) + '...';
    return splitText?.length > maxWord ? splitText.slice(0, maxWord).join(' ') + '...' : text;
  }

  I18nFieldError(input?: string, replace?: string) {
    const inputText = input ?? '';
    const replaceText = replace ?? '';

    return inputText.replace('{0}', replaceText);
  }
};
const optionMirror = new OptionMirror();

export { optionMirror };
