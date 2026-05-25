export class BalanceRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async ( where, tx = this.prisma ) => {
    return await tx.inventoryBalance.count( { where } );
  };

  create = async ( data, tx = this.prisma ) => {
    return await tx.inventoryBalance.create( { data } );
  };

  delete = async ( where, tx = this.prisma ) => {
    return await tx.inventoryBalance.delete( { where } );
  };

  find = async ( { filters = {}, sort = { 'id': 'desc' }, pagination = { skip: 0, limit: 10 } }, tx = this.prisma ) => {
    return await tx.inventoryBalance.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip
    } );
  };

  findById = async ( id, tx = this.prisma ) => {
    return await tx.inventoryBalance.findUnique( { where: { id } } );
  };

  update = async ( where, data, tx = this.prisma ) => {
    return await tx.inventoryBalance.update( { where, data } );
  };

  upsert = async ( lines, tx = this.prisma ) => {
    for ( const line of lines ) {
      await tx.inventoryBalance.upsert( {
        where: {
          productId: line.productId,
          warehouseId: line.warehouseId
        },
        update: {
          quantity: { increment: line.quantity }
        },
        create: line
      } );
    }
  };

}