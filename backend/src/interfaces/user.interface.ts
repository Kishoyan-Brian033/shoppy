import {Role} fro
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
