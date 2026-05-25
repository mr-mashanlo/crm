export class WarehouseRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async ( where, tx = this.prisma ) => {
    return await tx.warehouse.count( { where } );
  };

  create = async ( data, tx = this.prisma ) => {
    return await tx.warehouse.create( { data } );
  };

  delete = async ( where, tx = this.prisma ) => {
    return await tx.warehouse.delete( { where } );
  };

  find = async ( { filters = {}, sort = { 'id': 'desc' }, pagination = { skip: 0, limit: 10 } }, tx = this.prisma ) => {
    return await tx.warehouse.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip
    } );
  };

  findById = async ( id, tx = this.prisma ) => {
    return await tx.warehouse.findUnique( { where: { id } } );
  };

  update = async ( where, data, tx = this.prisma ) => {
    return await tx.warehouse.update( { where, data } );
  };

}