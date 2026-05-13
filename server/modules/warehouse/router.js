import { Router } from 'express';

import { checkRoles } from '../../middlewares/check-roles.js';
import { isAuth } from '../../middlewares/is-auth.js';
import { validate } from '../../middlewares/validate.js';
import { warehouseController } from './index.js';
import { WarehouseSchema } from './schema.js';

const warehouseRouter = Router();

warehouseRouter.post( '/warehouses', isAuth, checkRoles( [ 'ADMIN' ] ), validate( WarehouseSchema ), warehouseController.createWarehouse );
warehouseRouter.delete( '/warehouses/:id', isAuth, checkRoles( [ 'ADMIN' ] ), warehouseController.deleteWarehouse );
warehouseRouter.get( '/warehouses', isAuth, checkRoles( [ 'ADMIN' ] ), warehouseController.getWarehouses );
warehouseRouter.get( '/warehouses/:id', isAuth, checkRoles( [ 'ADMIN' ] ), warehouseController.getWarehouseById );
warehouseRouter.put( '/warehouses/:id', isAuth, checkRoles( [ 'ADMIN' ] ), validate( WarehouseSchema ), warehouseController.updateWarehouseById );

export { warehouseRouter };
