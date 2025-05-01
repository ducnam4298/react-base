import { createSlice } from '@reduxjs/toolkit';
import { DialogMode, IMessage } from 'common/models';
import { fieldChangeReducer, hideToastMessageReducer, showToastMessageReducer } from "store/core";

export interface UserState {
  message: IMessage;
}

const initialState: UserState = {
  message: {
    hidden: true,
    title: '',
    content: '',
    mode: DialogMode.Close,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fieldChange: fieldChangeReducer<UserState>,
    showToastMessage: showToastMessageReducer<UserState>,
    hideToastMessage: hideToastMessageReducer<UserState>,
  },
});
export const UserAction = userSlice.actions;

export const UserReducer = userSlice.reducer;