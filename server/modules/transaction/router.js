import { Router } from 'express';

import { checkRoles } from '../../middlewares/check-roles.js';
import { isAuth } from '../../middlewares/is-auth.js';
import { validate } from '../../middlewares/validate.js';
import { transactionController } from './index.js';
import { TransactionSchema } from './schema.js';

const transactionRouter = Router();

transactionRouter.post( '/transactions', isAuth, checkRoles( [ 'ADMIN' ] ), validate( TransactionSchema ), transactionController.createTransaction );
transactionRouter.get( '/transactions', isAuth, checkRoles( [ 'ADMIN' ] ), transactionController.getTransactions );
transactionRouter.get( '/transactions/:id', isAuth, checkRoles( [ 'ADMIN' ] ), transactionController.getTransactionById );

export { transactionRouter };
