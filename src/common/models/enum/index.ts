export enum StatusGlobal {
  Draft = 'draft',
  Public = 'public',
  Hide = 'hide',
}

export enum Privacy {
  Private = 'private',
  Public = 'public',
}

export enum ContentType {
  Text = 'text',
  Image = 'image',
  Video = 'video',
  Multi = 'multi',
}

export enum GenderType {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum VisiblePost {
  Private = 'private',
  Public = 'public',
}

export enum LanguageCode {
  FR = 'fr',
  EN = 'en',
}

export enum FileType {
  Image,
  File,
}

export type RightOption = {
  title?: string;
  required?: boolean;
  show?: boolean;
};
