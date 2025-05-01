import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CoreState, CoreReducer } from './core';
import { UserState, UserReducer } from './user';

const rootReducers = combineReducers({
  core: CoreReducer,
  user: UserReducer,
});

export interface ApplicationState {
  core: CoreState;
  user: UserState;
}

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
