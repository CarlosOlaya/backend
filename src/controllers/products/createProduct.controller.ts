import type { NextFunction, Request, Response } from 'express';

import logger from '@managers/logger.manager';
import * as Models from '@managers/models.manager';
import productManager from '@managers/product.manager';
import getImagesURL from '@utils/getImagesURL';
import HttpError from '@utils/HttpError';

const { createProduct } = productManager();

async function createProductController(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      const error = new HttpError(401, 'Unauthorized - No token provided');
      return next(error);
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      const error = new HttpError(400, 'Invalid data - No files have been selected.');
      return next(error);
    }

    const imageUrls = await getImagesURL({ files: req.files, path: 'products' });

    const productData: Partial<Models.Product> = {
      category: req.body['category'],
      color: req.body['color'],
      countInStock: req.body['countInStock'],
      description: req.body['description'],
      image: imageUrls[0],
      name: req.body['name'],
      price: req.body['price'],
      scraps: req.body['scraps'],
      style: req.body['style'],
    };

    const product = await createProduct(productData);

    res.status(201).json({ message: 'Product created', data: product });
  } catch (error: unknown) {
    logger.error(error);
    next();
  }
}

export default createProductController;
