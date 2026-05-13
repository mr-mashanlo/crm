import { FilteringSchema, PaginationSchema, SortingSchema } from './schema.js';

export class WarehouseService {

  constructor( warehouseRepository ) {
    this.warehouseRepository = warehouseRepository;
  };

  createWarehouse = async body => {
    return await this.warehouseRepository.create( body );
  };

  deleteWarehouse = async query => {
    await this.warehouseRepository.delete( query );
  };

  getWarehouses = async ( query = {} ) => {
    const filters = FilteringSchema.parse( query );
    const sort = SortingSchema.parse( query );
    const pagination = PaginationSchema.parse( query );
    const data = await this.warehouseRepository.find( { filters, sort: { [sort.sort]: sort.order }, pagination: { ...pagination, skip: ( pagination.page - 1 ) * pagination.limit } } );
    const total = await this.warehouseRepository.count( filters );
    return { data, total, ...pagination };
  };

  getWarehouseById = async id => {
    return await this.warehouseRepository.findById( id );
  };

  updateWarehouseById = async ( id, body ) => {
    return await this.warehouseRepository.update( { id }, body );
  };

};