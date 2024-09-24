import { Router } from 'express';

import loginController from '@controllers/login.controller';
import registerController from '@controllers/register.controller';
import authenticationMiddleware from '@middlewares/authentication.middleware';
import validateFieldsMiddleware from '@middlewares/validateFields.middleware';
import loginValidator from '@validators/login.validator';
import registerValidator from '@validators/register.validator';

const router = Router();

router.post('/login', loginValidator, validateFieldsMiddleware, loginController);

router.post('/register', authenticationMiddleware, registerValidator, validateFieldsMiddleware, registerController);

export default router;
