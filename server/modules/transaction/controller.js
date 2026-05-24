export class TransactionController {

  constructor( transactionService ) {
    this.transactionService = transactionService;
  };

  createTransaction = async ( req, res, next ) => {
    try {
      const document = await this.transactionService.createTransaction( req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  deleteTransaction = async ( req, res, next ) => {
    try {
      const document = await this.transactionService.deleteTransaction( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getTransactions = async ( req, res, next ) => {
    try {
      const document = await this.transactionService.getTransactions( req.query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getTransactionById = async ( req, res, next ) => {
    try {
      const document = await this.transactionService.getTransactionById( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  updateTransactionById = async ( req, res, next ) => {
    try {
      const document = await this.transactionService.updateTransactionById( req.params.id, req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};