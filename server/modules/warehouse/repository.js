export class WarehouseRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async where => {
    return await this.prisma.warehouse.count( { where } );
  };

  create = async data => {
    return await this.prisma.warehouse.create( { data } );
  };

  delete = async where => {
    return await this.prisma.warehouse.delete( { where } );
  };

  find = async ( { filters, sort, pagination } ) => {
    return await this.prisma.warehouse.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip
    } );
  };

  findOne = async where => {
    return await this.prisma.warehouse.findFirst( { where } );
  };

  findById = async id => {
    return await this.prisma.warehouse.findUnique( { where: { id } } );
  };

  update = async ( where, data ) => {
    return await this.prisma.warehouse.update( { where, data } );
  };

}