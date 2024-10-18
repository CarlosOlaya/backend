import { Router } from 'express';

import createProductController from '@controllers/createProduct.controller';
import getProductController from '@controllers/getProduct.controller';
import getProductsController from '@controllers/getProducts.controller';
import authenticationMiddleware from '@middlewares/authentication.middleware';
import validateFieldsMiddleware from '@middlewares/validateFields.middleware';
import createProductValidator from '@validators/createProduct.validator';
import getProductsValidator from '@validators/getProducts.validator';

const router = Router();

router.post('/', authenticationMiddleware, createProductValidator, validateFieldsMiddleware, createProductController);

router.get('/', getProductsValidator, validateFieldsMiddleware, getProductsController);

router.get('/:productId', getProductController);

export default router;
