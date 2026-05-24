import { FilteringSchema, PaginationSchema, SortingSchema } from './schema.js';

export class PriceService {

  constructor( priceRepository ) {
    this.priceRepository = priceRepository;
  };

  createPrice = async body => {
    return await this.priceRepository.create( body );
  };

  deletePrice = async query => {
    await this.priceRepository.delete( query );
  };

  getPrices = async ( query = {} ) => {
    const filters = FilteringSchema.parse( query );
    const sort = SortingSchema.parse( query );
    const pagination = PaginationSchema.parse( query );
    const data = await this.priceRepository.find( { filters, sort: { [sort.sort]: sort.order }, pagination: { ...pagination, skip: ( pagination.page - 1 ) * pagination.limit } } );
    const total = await this.priceRepository.count( filters );
    return { data, total, ...pagination };
  };

  getPriceById = async id => {
    return await this.priceRepository.findById( id );
  };

  updatePriceById = async ( id, body ) => {
    return await this.priceRepository.update( { id }, body );
  };

};