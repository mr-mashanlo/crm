export class ProductRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  count = async where => {
    return await this.prisma.product.count( { where } );
  };

  create = async data => {
    return await this.prisma.product.create( { data } );
  };

  delete = async where => {
    return await this.prisma.product.delete( { where } );
  };

  find = async ( { filters, sort, pagination } ) => {
    return await this.prisma.product.findMany( {
      where: filters,
      orderBy: sort,
      take: pagination.limit,
      skip: pagination.skip
    } );
  };

  findOne = async where => {
    return await this.prisma.product.findFirst( { where } );
  };

  findById = async id => {
    return await this.prisma.product.findUnique( { where: { id } } );
  };

  update = async ( where, data ) => {
    return await this.prisma.product.update( { where, data } );
  };

}