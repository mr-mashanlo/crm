export class DocumentLineRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async ( where, tx = this.prisma ) => {
    return await tx.inventoryDocumentLine.count( { where } );
  };

  create = async ( data, tx = this.prisma ) => {
    return await tx.inventoryDocumentLine.create( { data } );
  };

  delete = async ( where, tx = this.prisma ) => {
    return await tx.inventoryDocumentLine.delete( { where } );
  };

  find = async ( { filters = {}, sort = { 'id': 'desc' }, pagination = { skip: 0, limit: 10 }, include = {} }, tx = this.prisma ) => {
    return await tx.inventoryDocumentLine.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip,
      include
    } );
  };

  findById = async ( id, tx = this.prisma ) => {
    return await tx.inventoryDocumentLine.findUnique( { where: { id } } );
  };

  update = async ( where, data, tx = this.prisma ) => {
    return await tx.inventoryDocumentLine.update( { where, data } );
  };

}