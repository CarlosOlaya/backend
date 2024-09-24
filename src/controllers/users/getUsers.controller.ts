import type { NextFunction, Request, Response } from 'express';

import logger from '@managers/logger.manager';
import userManager from '@managers/user.manager';
import HttpError from '@utils/HttpError';

const { countUsers, getPagenizedUsers } = userManager();

async function getUsersController(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      const error = new HttpError(401, 'Unauthorized - No token provided');
      return next(error);
    }

    const users = await getPagenizedUsers(req);
    const total = await countUsers();
    const page = parseInt(req.query['page'] as string) || 1;
    const pageSize = parseInt(req.query['pageSize'] as string) || 10;

    res.json({
      data: users,
      page,
      pageSize,
      total,
    });
  } catch (error: unknown) {
    logger.error(error);
    next();
  }
}

export default getUsersController;
