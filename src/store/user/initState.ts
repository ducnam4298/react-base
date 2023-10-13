import { User } from '_mocks_/user';
import { GenderType } from 'common/models/enum';

export interface UserModal {
  fullName?: string;
  phone?: string;
  address?: string;
  gender?: GenderType;
}

export interface State {
  users?: User[];
  createNewUser?: UserModal;
}

export const InitState: State = {
  users: [],
  createNewUser: {
    fullName: undefined,
    phone: undefined,
    address: undefined,
    gender: undefined,
  },
};
