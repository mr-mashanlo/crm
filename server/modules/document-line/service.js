import { FilteringSchema, PaginationSchema, SortingSchema } from './schema.js';

export class DocumentLineService {

  constructor( documentLineRepository ) {
    this.documentLineRepository = documentLineRepository;
  };

  createDocumentLine = async body => {
    return await this.documentLineRepository.create( body );
  };

  getDocumentLines = async ( query = {} ) => {
    const filters = FilteringSchema.parse( query );
    const sort = SortingSchema.parse( query );
    const pagination = PaginationSchema.parse( query );
    const data = await this.documentLineRepository.find( { filters, sort: { [sort.sort]: sort.order }, pagination: { ...pagination, skip: ( pagination.page - 1 ) * pagination.limit } } );
    const total = await this.documentLineRepository.count( filters );
    return { data, total, ...pagination };
  };

  getDocumentLineById = async id => {
    return await this.documentLineRepository.findById( id );
  };

  updateDocumentLineById = async ( id, body ) => {
    return await this.documentLineRepository.update( { id }, body );
  };

};