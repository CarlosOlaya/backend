import { Router } from 'express';

import deleteUserController from '@controllers/deleteUser.controller';
import getUserController from '@controllers/getUser.controller';
import getUsersController from '@controllers/getUsers.controller';
import updateUserController from '@controllers/updateUser.controller';
import updateUserAvatarController from '@controllers/updateUserAvatar.controller';
import authenticationMiddleware from '@middlewares/authentication.middleware';
import validateFieldsMiddleware from '@middlewares/validateFields.middleware';
import getUsersValidator from '@validators/getUsers.validator';
import updateAvatarValidator from '@validators/updateAvatar.validator';
import updateUserValidator from '@validators/updateUser.validator';

const router = Router();

router.delete('/:userId', authenticationMiddleware, deleteUserController);

router.get('/:userId', authenticationMiddleware, getUserController);

router.get('/', authenticationMiddleware, getUsersValidator, validateFieldsMiddleware, getUsersController);

router.patch('/:userId/avatar', authenticationMiddleware, updateAvatarValidator, validateFieldsMiddleware, updateUserAvatarController);

router.put('/:userId', authenticationMiddleware, updateUserValidator, validateFieldsMiddleware, updateUserController);

export default router;
