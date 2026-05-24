export class DocumentLineController {

  constructor( documentLineService ) {
    this.documentLineService = documentLineService;
  };

  createDocumentLine = async ( req, res, next ) => {
    try {
      const document = await this.documentLineService.createDocumentLine( req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getDocumentLines = async ( req, res, next ) => {
    try {
      const document = await this.documentLineService.getDocumentLines( req.query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getDocumentLineById = async ( req, res, next ) => {
    try {
      const document = await this.documentLineService.getDocumentLineById( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  updateDocumentLineById = async ( req, res, next ) => {
    try {
      const document = await this.documentLineService.updateDocumentLineById( req.params.id, req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};