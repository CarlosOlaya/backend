import type { NextFunction, Request, Response } from 'express';

import logger from '@managers/logger.manager';
import passwordManager from '@managers/password.manager';
import userManager from '@managers/user.manager';
import HttpError from '@utils/HttpError';

const { hashPassword } = passwordManager();
const { cleanUser, createUser, getUserByEmail } = userManager();

async function registerController(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user?.isAdmin) {
      const error = new HttpError(403, 'Access denied - Not authorized to register users');
      return next(error);
    }

    const email = (req.body['email'] as string).trim();
    const password = (req.body['password'] as string).trim();
    const username = (req.body['username'] as string).trim();
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      const error = new HttpError(409, 'Conflict - Email already in use');
      return next(error);
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await createUser({ email, password: hashedPassword, username });

    res.status(201).json({
      message: 'User registered successfully',
      data: cleanUser(newUser),
    });
  } catch (error: unknown) {
    logger.error(error);
    next();
  }
}

export default registerController;
