import { FilteringSchema, PaginationSchema, SortingSchema } from './schema.js';

export class ProductService {

  constructor( productRepository ) {
    this.productRepository = productRepository;
  };

  createProduct = async body => {
    return await this.productRepository.create( body );
  };

  deleteProduct = async query => {
    await this.productRepository.delete( query );
  };

  getProducts = async ( query = {} ) => {
    const filters = FilteringSchema.parse( query );
    const sort = SortingSchema.parse( query );
    const pagination = PaginationSchema.parse( query );
    const data = await this.productRepository.find( { filters, sort: { [sort.sort]: sort.order }, pagination: { ...pagination, skip: ( pagination.page - 1 ) * pagination.limit } } );
    const total = await this.productRepository.count( filters );
    return { data, total, ...pagination };
  };

  getProductById = async id => {
    return await this.productRepository.findById( id );
  };

  updateProductById = async ( id, body ) => {
    return await this.productRepository.update( { id }, body );
  };

};