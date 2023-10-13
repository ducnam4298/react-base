import { createSlice } from '@reduxjs/toolkit';
import { InitState, State } from './initState';
import { DialogMode, MessageType } from 'common/models/message';
import { InitFormContexts } from 'common/models/shared';

const userSlice = createSlice({
  name: 'user',
  initialState: InitState,
  reducers: {
    fieldChange(state, action) {
      const actions = action as FieldChangeAction;
      return {
        ...state,
        [actions.payload.fieldName]: actions.payload.fieldValue,
      };
    },
    showNotification(state, action) {
      const actions = action as ShowMessageAction;
      return {
        ...state,
        message: {
          hidden: false,
          title: 'Show notification: ',
          content: actions.payload.content,
          mode: actions.payload.mode || DialogMode.Toast,
          messageType: actions.payload.messageType,
        },
        formContext: InitFormContexts,
      };
    },
    hideNotification(state, action) {
      return {
        ...state,
        message: {
          hidden: true,
          title: '',
          content: '',
          mode: DialogMode.Close,
        },
      };
    },
  },
});
export const UserAction = userSlice.actions;

export const UserReducer = userSlice.reducer;

export type { State };

interface FieldChangeAction {
  type: string;
  payload: {
    fieldName: string;
    fieldValue?: any;
  };
}
interface ShowMessageAction {
  type: string;
  payload: {
    messageType?: MessageType;
    content?: string;
    mode?: DialogMode;
  };
}
