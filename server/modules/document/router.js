import { Router } from 'express';

import { checkRoles } from '../../middlewares/check-roles.js';
import { isAuth } from '../../middlewares/is-auth.js';
import { validate } from '../../middlewares/validate.js';
import { documentController } from './index.js';
import { DocumentSchema } from './schema.js';

const documentRouter = Router();

documentRouter.post( '/documents', isAuth, checkRoles( [ 'ADMIN' ] ), validate( DocumentSchema ), documentController.createDocument );
documentRouter.get( '/documents', isAuth, checkRoles( [ 'ADMIN' ] ), documentController.getDocuments );
documentRouter.get( '/documents/:id', isAuth, checkRoles( [ 'ADMIN' ] ), documentController.getDocumentById );
documentRouter.put( '/documents/:id', isAuth, checkRoles( [ 'ADMIN' ] ), validate( DocumentSchema ), documentController.updateDocumentById );

export { documentRouter };
