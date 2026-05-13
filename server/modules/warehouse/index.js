import { prisma } from '../../config/db.js';
import { WarehouseController } from './controller.js';
import { WarehouseRepository } from './repository.js';
import { WarehouseService } from './service.js';

const warehouseRepository = new WarehouseRepository( prisma );
export const warehouseService = new WarehouseService( warehouseRepository );
export const warehouseController = new WarehouseController( warehouseService );