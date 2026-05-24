import { FilteringSchema, PaginationSchema, SortingSchema } from './schema.js';

export class BalanceService {

  constructor( balanceRepository ) {
    this.balanceRepository = balanceRepository;
  };

  createBalance = async body => {
    return await this.balanceRepository.create( body );
  };

  deleteBalance = async query => {
    await this.balanceRepository.delete( query );
  };

  getBalances = async ( query = {} ) => {
    const filters = FilteringSchema.parse( query );
    const sort = SortingSchema.parse( query );
    const pagination = PaginationSchema.parse( query );
    const data = await this.balanceRepository.find( { filters, sort: { [sort.sort]: sort.order }, pagination: { ...pagination, skip: ( pagination.page - 1 ) * pagination.limit } } );
    const total = await this.balanceRepository.count( filters );
    return { data, total, ...pagination };
  };

  getBalanceById = async id => {
    return await this.balanceRepository.findById( id );
  };

  updateBalanceById = async ( id, body ) => {
    return await this.balanceRepository.update( { id }, body );
  };

};