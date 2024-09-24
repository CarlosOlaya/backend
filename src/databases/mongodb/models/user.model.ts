import { model, Schema } from 'mongoose';

import logger from '@managers/logger.manager';
import type { User } from '@mongodb/interfaces/user.interface';
import Counter from '@mongodb/models/counter.model';

const userSchema = new Schema<User>(
  {
    avatar: {
      type: {
        public_id: String,
        url: String,
      },
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre('save', async function () {
  if (this.isNew) {
    try {
      const counter = await Counter.findOneAndUpdate({ _id: 'userId' }, { $inc: { seq: 1 } }, { new: true, upsert: true });

      this.userId = counter.seq.toString();
    } catch (error: unknown) {
      logger.error(error);
    }
  }
});

export default model<User>('User', userSchema);
