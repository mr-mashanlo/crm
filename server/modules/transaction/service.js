import { FilteringSchema, PaginationSchema, SortingSchema } from './schema.js';

export class TransactionService {

  constructor( transactionRepository ) {
    this.transactionRepository = transactionRepository;
  };

  createTransaction = async body => {
    return await this.transactionRepository.create( body );
  };

  deleteTransaction = async query => {
    await this.transactionRepository.delete( query );
  };

  getTransactions = async ( query = {} ) => {
    const filters = FilteringSchema.parse( query );
    const sort = SortingSchema.parse( query );
    const pagination = PaginationSchema.parse( query );
    const data = await this.transactionRepository.find( { filters, sort: { [sort.sort]: sort.order }, pagination: { ...pagination, skip: ( pagination.page - 1 ) * pagination.limit } } );
    const total = await this.transactionRepository.count( filters );
    return { data, total, ...pagination };
  };

  getTransactionById = async id => {
    return await this.transactionRepository.findById( id );
  };

  updateTransactionById = async ( id, body ) => {
    return await this.transactionRepository.update( { id }, body );
  };

};