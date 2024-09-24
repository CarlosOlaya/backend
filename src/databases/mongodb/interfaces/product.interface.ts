import { Document } from 'mongoose';

interface Image {
  public_id: string;
  url: string;
}

export interface Product extends Document {
  category: 'sandalia' | 'tarjetero' | 'bolso' | 'otros';
  color: number;
  countInStock: number;
  description: string;
  image: Image;
  name: string;
  price: number;
  scraps: number;
  slug: string;
  style: number;
}
