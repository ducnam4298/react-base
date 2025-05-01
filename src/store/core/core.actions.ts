import { DialogMode, MessageType } from 'common/models';

export interface FieldChangePayload {
  fieldName: string;
  fieldValue?: any;
}

export interface ShowToastMessagePayload {
  messageType?: MessageType;
  content?: string;
  mode?: DialogMode;
}
