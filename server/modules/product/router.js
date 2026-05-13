import { Router } from 'express';

import { checkRoles } from '../../middlewares/check-roles.js';
import { isAuth } from '../../middlewares/is-auth.js';
import { validate } from '../../middlewares/validate.js';
import { productController } from './index.js';
import { ProductSchema } from './schema.js';

const productRouter = Router();

productRouter.post( '/products', isAuth, checkRoles( [ 'ADMIN' ] ), validate( ProductSchema ), productController.createProduct );
productRouter.delete( '/products/:id', isAuth, checkRoles( [ 'ADMIN' ] ), productController.deleteProduct );
productRouter.get( '/products', isAuth, productController.getProducts );
productRouter.get( '/products/:id', isAuth, productController.getProductById );
productRouter.put( '/products/:id', isAuth, checkRoles( [ 'ADMIN' ] ), validate( ProductSchema ), productController.updateProductById );

export { productRouter };
