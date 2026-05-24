import { Router } from 'express';

import { checkRoles } from '../../middlewares/check-roles.js';
import { isAuth } from '../../middlewares/is-auth.js';
import { validate } from '../../middlewares/validate.js';
import { priceController } from './index.js';
import { PriceSchema } from './schema.js';

const priceRouter = Router();

priceRouter.post( '/prices', isAuth, checkRoles( [ 'ADMIN' ] ), validate( PriceSchema ), priceController.createPrice );
priceRouter.delete( '/prices/:id', isAuth, checkRoles( [ 'ADMIN' ] ), priceController.deletePrice );
priceRouter.get( '/prices', isAuth, checkRoles( [ 'ADMIN' ] ), priceController.getPrices );
priceRouter.get( '/prices/:id', isAuth, checkRoles( [ 'ADMIN' ] ), priceController.getPriceById );
priceRouter.put( '/prices/:id', isAuth, checkRoles( [ 'ADMIN' ] ), validate( PriceSchema ), priceController.updatePriceById );

export { priceRouter };
