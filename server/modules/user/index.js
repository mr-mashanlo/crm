import { prisma } from '../../config/db.js';
import { UserController } from './controller.js';
import { PasswordService } from './libs/password-service.js';
import { TokenService } from './libs/token-service.js';
import { UserRepository } from './repository.js';
import { UserService } from './service.js';

const passwordService = new PasswordService();
export const tokenService = new TokenService();
const userRepository = new UserRepository( prisma );
export const userService = new UserService( userRepository, tokenService, passwordService );
export const userController = new UserController( userService );
