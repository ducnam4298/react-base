import { LanguageCode } from 'common/models/enum';

export interface Language {
  code?: LanguageCode;
  title?: string;
  description?: string;
}
