export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  username: string;
  city: string;
  province: string;
  numberPhone?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
