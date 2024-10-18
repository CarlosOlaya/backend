import { Document } from 'mongoose';

export interface Product extends Document {
  category: 'sandalia' | 'tarjetero' | 'bolso' | 'otros';
  color: number;
  countInStock: number;
  description: string;
  image: string;
  name: string;
  price: number;
  scraps: number;
  slug: string;
  style: number;
}
