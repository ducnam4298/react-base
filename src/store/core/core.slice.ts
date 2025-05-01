import { createSlice } from '@reduxjs/toolkit';
import {
  fieldChangeReducer,
  showToastMessageReducer,
  hideToastMessageReducer,
} from './core.reducers';
import { DialogMode, IMessage } from 'common/models';

export interface CoreState {
  message: IMessage;
}

const initialState: CoreState = {
  message: {
    hidden: true,
    title: '',
    content: '',
    mode: DialogMode.Close,
  },
};

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    fieldChange: fieldChangeReducer<CoreState>,
    showToastMessage: showToastMessageReducer<CoreState>,
    hideToastMessage: hideToastMessageReducer<CoreState>,
  },
});

export const CoreAction = coreSlice.actions;
export const CoreReducer = coreSlice.reducer;
