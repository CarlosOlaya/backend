import type { Document } from 'mongoose';

export interface User extends Document {
  avatar: {
    public_id: string;
    url: string;
  } | null;
  email: string;
  isAdmin: boolean;
  password: string;
  userId: string;
  username: string;
}
