export class ProductRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async ( where, tx = this.prisma ) => {
    return await tx.product.count( { where } );
  };

  create = async ( data, tx = this.prisma ) => {
    return await tx.product.create( { data } );
  };

  delete = async ( where, tx = this.prisma ) => {
    return await tx.product.delete( { where } );
  };

  find = async ( { filters = {}, sort = { 'id': 'desc' }, pagination = { skip: 0, limit: 10 } }, tx = this.prisma ) => {
    return await tx.product.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip,
      include: {
        balances: true,
        prices: { take: 1, orderBy: { 'id': 'desc' } }
      }
    } );
  };

  findById = async ( id, tx = this.prisma ) => {
    return await tx.product.findUnique( {
      where: { id },
      include: {
        balances: true,
        prices: { take: 1, orderBy: { 'id': 'desc' } }
      }
    } );
  };

  update = async ( where, data, tx = this.prisma ) => {
    return await tx.product.update( { where, data } );
  };

}