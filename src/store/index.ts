import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { State as UserState,  UserReducer } from './user';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
const rootReducers = combineReducers({
  user: UserReducer,
});

export interface ApplicationState {
  UserState: UserState;
}

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const store = configureStore({
  reducer: rootReducers,
});

export default store;
