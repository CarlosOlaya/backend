import { model, Schema } from 'mongoose';
import slugify from 'slugify';

import logger from '@managers/logger.manager';
import type { Product } from '@mongodb/interfaces/product.interface';

const productSchema = new Schema<Product>(
  {
    category: {
      type: String,
      trim: true,
      required: true,
    },
    color: {
      type: Number,
      required: true,
      min: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: {
        public_id: {
          type: String,
          required: true,
          trim: true,
        },
        url: {
          type: String,
          required: true,
          trim: true,
        },
      },
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    scraps: {
      type: Number,
      required: true,
      min: 0,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    style: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

productSchema.index({ slug: 1 }, { unique: true });

productSchema.pre('save', async function () {
  if (this.isNew || this.isModified('name')) {
    try {
      const productSlug = `${this.name}-${this.style}-${this.scraps}-${this.color}`;

      this.slug = slugify(productSlug, { lower: true });
    } catch (error) {
      logger.error(error);
    }
  }
});

export default model<Product>('Product', productSchema);
