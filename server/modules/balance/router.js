import { Router } from 'express';

import { checkRoles } from '../../middlewares/check-roles.js';
import { isAuth } from '../../middlewares/is-auth.js';
import { validate } from '../../middlewares/validate.js';
import { balanceController } from './index.js';
import { BalanceSchema } from './schema.js';

const balanceRouter = Router();

balanceRouter.post( '/balances', isAuth, checkRoles( [ 'ADMIN' ] ), validate( BalanceSchema ), balanceController.createBalance );
balanceRouter.delete( '/balances/:id', isAuth, checkRoles( [ 'ADMIN' ] ), balanceController.deleteBalance );
balanceRouter.get( '/balances', isAuth, checkRoles( [ 'ADMIN' ] ), balanceController.getBalances );
balanceRouter.get( '/balances/:id', isAuth, checkRoles( [ 'ADMIN' ] ), balanceController.getBalanceById );
balanceRouter.put( '/balances/:id', isAuth, checkRoles( [ 'ADMIN' ] ), validate( BalanceSchema ), balanceController.updateBalanceById );

export { balanceRouter };
