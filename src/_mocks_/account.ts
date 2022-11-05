export interface Account {
  displayName: string;
  email: string;
  photoURL: string;
  role: string;
}

const account: Account = {
  displayName: 'Nate',
  email: 'ducnam4298@gmail.com',
  photoURL: '/static/mock-images/avatars/avatar_default.jpeg',
  role: 'Develop',
};

export default account;
