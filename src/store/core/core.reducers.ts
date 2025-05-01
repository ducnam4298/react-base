import { PayloadAction } from '@reduxjs/toolkit';
import { FieldChangePayload, ShowToastMessagePayload } from './core.actions';
import { DialogMode, IMessage } from "common/models";

export const fieldChangeReducer = <T extends Record<string, any>>(
  state: T,
  action: PayloadAction<FieldChangePayload>
): T => {
  const { fieldName, fieldValue } = action.payload;
  return {
    ...state,
    [fieldName]: fieldValue,
  };
};

export const showToastMessageReducer = <T extends { message: IMessage }>(
  state: T,
  action: PayloadAction<ShowToastMessagePayload>
): T => {
  const { content, messageType, mode } = action.payload;
  return {
    ...state,
    message: {
      hidden: false,
      title: 'Show notification: ',
      content: content ?? '',
      mode: mode ?? DialogMode.Toast,
      messageType: messageType ?? 'info',
    },
  };
};

export const hideToastMessageReducer = <T extends { message: IMessage }>(
  state: T
): T => {
  return {
    ...state,
    message: {
      hidden: true,
      title: '',
      content: '',
      mode: DialogMode.Close,
    },
  };
};
