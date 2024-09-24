import type { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

function validateFieldsMiddleware(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: true, message: 'Validation Error', statusCode: 422, errors: errors.array() });
  }

  next();
}

export default validateFieldsMiddleware;
