export class BalanceController {

  constructor( balanceService ) {
    this.balanceService = balanceService;
  };

  createBalance = async ( req, res, next ) => {
    try {
      const document = await this.balanceService.createBalance( req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  deleteBalance = async ( req, res, next ) => {
    try {
      const document = await this.balanceService.deleteBalance( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getBalances = async ( req, res, next ) => {
    try {
      const document = await this.balanceService.getBalances( req.query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getBalanceById = async ( req, res, next ) => {
    try {
      const document = await this.balanceService.getBalanceById( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  updateBalanceById = async ( req, res, next ) => {
    try {
      const document = await this.balanceService.updateBalanceById( req.params.id, req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};