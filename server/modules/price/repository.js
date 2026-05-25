export class PriceRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async ( where, tx = this.prisma ) => {
    return await tx.price.count( { where } );
  };

  create = async ( data, tx = this.prisma ) => {
    return await tx.$transaction( async tx => {
      await tx.price.updateMany( { where: { productId: data.productId, validTo: null }, data: { validTo: new Date() } } );
      return await tx.price.create( { data } );
    } );
  };

  delete = async ( where, tx = this.prisma ) => {
    return await tx.price.delete( { where } );
  };

  find = async ( { filters = {}, sort = { 'id': 'desc' }, pagination = { skip: 0, limit: 10 } }, tx = this.prisma ) => {
    return await tx.price.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip
    } );
  };

  findById = async ( id, tx = this.prisma ) => {
    return await tx.price.findUnique( { where: { id } } );
  };

  update = async ( where, data, tx = this.prisma ) => {
    return await tx.price.update( { where, data } );
  };

}