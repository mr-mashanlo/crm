import { prisma } from '../../config/db.js';
import { balanceRepository } from '../balance/index.js';
import { documentLineRepository } from '../document-line/index.js';
import { transactionRepository } from '../transaction/index.js';
import { DocumentController } from './controller.js';
import { DocumentRepository } from './repository.js';
import { DocumentService } from './service.js';

export const documentRepository = new DocumentRepository( prisma );
export const documentService = new DocumentService( prisma, documentRepository, documentLineRepository, balanceRepository, transactionRepository );
export const documentController = new DocumentController( documentService );