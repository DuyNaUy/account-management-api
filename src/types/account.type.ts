export interface IAccount {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
}

export interface AccountResponse {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: Date;
}
