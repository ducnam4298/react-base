import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { mockImgAvatar } from '../utils/mockImages';

export interface User {
  id: string;
  avatarUrl: string;
  name: string;
  company: string;
  isVerified: boolean;
  status?: string;
  role?: string;
}

const users: User[] = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default users;
