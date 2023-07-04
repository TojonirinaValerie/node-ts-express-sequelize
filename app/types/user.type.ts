export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  updatedAt?: Date;
  createdAt?: Date;
}
