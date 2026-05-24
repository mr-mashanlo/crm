import { prisma } from '../../config/db.js';
import { DocumentLineController } from './controller.js';
import { DocumentLineRepository } from './repository.js';
import { DocumentLineService } from './service.js';

export const documentLineRepository = new DocumentLineRepository( prisma );
export const documentLineService = new DocumentLineService( documentLineRepository );
export const documentLineController = new DocumentLineController( documentLineService );