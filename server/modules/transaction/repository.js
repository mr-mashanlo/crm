export class TransactionRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async ( where, tx = this.prisma ) => {
    return await tx.inventoryTransaction.count( { where } );
  };

  createMany = async ( data, tx = this.prisma ) => {
    return await tx.inventoryTransaction.createMany( { data } );
  };

  deleteMany = async ( where, tx = this.prisma ) => {
    return await tx.inventoryTransaction.deleteMany( { where } );
  };

  find = async ( { filters = {}, sort = { 'id': 'desc' }, pagination = { skip: 0, limit: 10 } }, tx = this.prisma ) => {
    return await tx.inventoryTransaction.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip
    } );
  };

  findById = async ( id, tx = this.prisma ) => {
    return await tx.inventoryTransaction.findUnique( { where: { id } } );
  };

  update = async ( where, data, tx = this.prisma ) => {
    return await tx.inventoryTransaction.update( { where, data } );
  };

}