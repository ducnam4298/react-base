export interface Account {
  displayName: string;
  email: string;
  photoURL: string;
  role: string;
}

const account: Account = {
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  photoURL: '/static/mock-images/avatars/avatar_default.jpg',
  role: '',
};

export default account;
