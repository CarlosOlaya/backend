import type { Product as mongodbProductInterface } from '@mongodb/interfaces/product.interface';
import type { User as mongodbUserInterface } from '@mongodb/interfaces/user.interface';

export interface Product extends mongodbProductInterface {}
export interface User extends mongodbUserInterface {}
