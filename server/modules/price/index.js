import { prisma } from '../../config/db.js';
import { PriceController } from './controller.js';
import { PriceRepository } from './repository.js';
import { PriceService } from './service.js';

export const priceRepository = new PriceRepository( prisma );
export const priceService = new PriceService( priceRepository );
export const priceController = new PriceController( priceService );