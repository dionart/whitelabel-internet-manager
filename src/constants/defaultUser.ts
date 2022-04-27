import { User } from '../store/ducks/user/types';

export const defaultUser: User = {
  id: 0,
  socketId: 0,
  providerId: 0,
  planId: 0,
  email: '',
  name: '',
  fantasyName: '',
  socialReason: '',
  stateRegistration: '',
  profilePicture: '',
  gender: '',
  userType: '',
  address: {
    zipcode: '',
    state: '',
    city: '',
    street: '',
    neighborhood: '',
    number: 0,
    ibgeCode: 0,
    complement: '',
  },
  discount: {
    amount: 0,
    percentage: 0,
    dueDate: '',
  },
  increment: {
    amount: 0,
    percentage: 0,
    dueDate: '',
  },
  dueDate: '',
  tolerance: 0,
  cpf: '',
  rg: '',
  cnpj: '',
  emittingOrgan: '',
  phone: '',
  phone2: '',
  phone3: '',
  birthDate: '',
  attendanceType: '',
  createdAt: '',
  updatedAt: '',
  firstAccess: true,
};
