export class PriceController {

  constructor( priceService ) {
    this.priceService = priceService;
  };

  createPrice = async ( req, res, next ) => {
    try {
      const document = await this.priceService.createPrice( req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  deletePrice = async ( req, res, next ) => {
    try {
      const document = await this.priceService.deletePrice( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getPrices = async ( req, res, next ) => {
    try {
      const document = await this.priceService.getPrices( req.query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getPriceById = async ( req, res, next ) => {
    try {
      const document = await this.priceService.getPriceById( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  updatePriceById = async ( req, res, next ) => {
    try {
      const document = await this.priceService.updatePriceById( req.params.id, req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};