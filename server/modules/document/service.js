import { FilteringSchema, PaginationSchema, SortingSchema } from './schema.js';

export class DocumentService {

  constructor( prisma, documentRepository, documentLineRepository, balanceRepository, transactionRepository ) {
    this.prisma = prisma;
    this.documentRepository = documentRepository;
    this.documentLineRepository = documentLineRepository;
    this.balanceRepository = balanceRepository;
    this.transactionRepository = transactionRepository;
  };

  createDocument = async body => {
    return await this.documentRepository.create( body );
  };

  getDocuments = async ( query = {} ) => {
    const filters = FilteringSchema.parse( query );
    const sort = SortingSchema.parse( query );
    const pagination = PaginationSchema.parse( query );
    const data = await this.documentRepository.find( { filters, sort: { [sort.sort]: sort.order }, pagination: { ...pagination, skip: ( pagination.page - 1 ) * pagination.limit } } );
    const total = await this.documentRepository.count( filters );
    return { data, total, ...pagination };
  };

  getDocumentById = async id => {
    return await this.documentRepository.findById( id );
  };

  updateDocumentById = async ( id, body ) => {
    return await this.prisma.$transaction( async tx => {
      const document = await this.documentRepository.findById( id );

      if ( document.status === body.status ) {
        return document;
      }

      const updatedDocument = await this.documentRepository.update( { id }, body, tx );
      const documentLines = await this.documentLineRepository.find( { filters: { documentId: document.id } }, tx );
      const transactionLines = documentLines.map( ( { quantity, price, documentId, productId, warehouseId } ) => ( { quantity: quantity * this._getBaseSign( body.status, body.type ), price, documentId, productId, warehouseId } ) );
      const balanceLines = documentLines.map( ( { quantity, productId, warehouseId } ) => ( { quantity: quantity * this._getBaseSign( body.status, body.type ), productId, warehouseId } ) );

      if ( body.status === 'DRAFT' ) {
        await this.transactionRepository.deleteMany( { documentId: document.id } );
      }

      if ( body.status !== 'DRAFT' ) {
        await this.transactionRepository.createMany( transactionLines, tx );
      }

      await this.balanceRepository.upsert( balanceLines, tx );
      return updatedDocument;
    } );
  };

  _getBaseSign = ( status, type ) => {
    const statusSign = status === 'COMPLETED' ? 1 : -1;
    const typeSign = type === 'SALE' || type === 'WRITE_OFF' ? -1 : 1;
    return statusSign * typeSign;
  };

};