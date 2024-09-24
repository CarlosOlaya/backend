import { body, check } from 'express-validator';

import validateImageFile from '@custom-image-validator';

const createProductValidator = [
  body('category')
    .isIn(['sandalia', 'tarjetero', 'bolso', 'otros'])
    .withMessage('Category must be one of the following: sandalia, tarjetero, bolso, otros'),

  body('color').isInt({ min: 0 }).withMessage('Color must be a positive integer'),

  body('countInStock').isInt({ min: 0 }).withMessage('Count in stock must be a positive integer'),

  body('description').isString().trim().notEmpty().withMessage('Description is required'),

  body('name').isString().trim().notEmpty().withMessage('Name is required'),

  body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),

  body('scraps').isInt({ min: 0 }).withMessage('Scraps must be a positive integer'),

  body('style').isInt({ min: 0 }).withMessage('Style must be a positive integer'),

  check('files').custom(validateImageFile),
];

export default createProductValidator;
