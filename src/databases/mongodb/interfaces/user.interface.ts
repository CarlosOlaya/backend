import type { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  isAdmin: boolean;
  password: string;
  userId: string;
  username: string;
}
