export class UserRepository {

  constructor( prisma ) {
    this.prisma = prisma;
  };

  create = async ( data, tx = this.prisma ) => {
    return await tx.user.create( { data } );
  };

  find = async ( tx = this.prisma ) => {
    return await tx.user.findMany();
  };

  findById = async ( id, tx = this.prisma ) => {
    return await tx.user.findUnique( { where: { id } } );
  };

  findByEmail = async ( email, tx = this.prisma ) => {
    return await tx.user.findUnique( { where: { email } } );
  };

  findByToken = async ( refreshToken, tx = this.prisma ) => {
    return await tx.user.findFirst( { where: { refreshToken } } );
  };

  update = async ( where, data, tx = this.prisma ) => {
    return await tx.user.update( { where, data } );
  };

}