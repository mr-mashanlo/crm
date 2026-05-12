import { Router } from 'express';

import { validate } from '../../middlewares/validate.js';
import { userController } from './index.js';
import { AuthSchema } from './schema.js';

const userRouter = Router();

userRouter.post( '/auth/signin', validate( AuthSchema ), userController.signIn );
userRouter.post( '/auth/signup', validate( AuthSchema ), userController.signUp );

export { userRouter };
