import { Router } from 'express';

import { checkRoles } from '../../middlewares/check-roles.js';
import { isAuth } from '../../middlewares/is-auth.js';
import { validate } from '../../middlewares/validate.js';
import { documentLineController } from './index.js';
import { DocumentLineSchema } from './schema.js';

const documentLineRouter = Router();

documentLineRouter.post( '/document-lines', isAuth, checkRoles( [ 'ADMIN' ] ), validate( DocumentLineSchema ), documentLineController.createDocumentLine );
documentLineRouter.get( '/document-lines', isAuth, checkRoles( [ 'ADMIN' ] ), documentLineController.getDocumentLines );
documentLineRouter.get( '/document-lines/:id', isAuth, checkRoles( [ 'ADMIN' ] ), documentLineController.getDocumentLineById );
documentLineRouter.put( '/document-lines/:id', isAuth, checkRoles( [ 'ADMIN' ] ), validate( DocumentLineSchema ), documentLineController.updateDocumentLineById );

export { documentLineRouter };
