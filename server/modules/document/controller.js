export class DocumentController {

  constructor( documentService ) {
    this.documentService = documentService;
  };

  createDocument = async ( req, res, next ) => {
    try {
      const document = await this.documentService.createDocument( req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getDocuments = async ( req, res, next ) => {
    try {
      const document = await this.documentService.getDocuments( req.query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getDocumentById = async ( req, res, next ) => {
    try {
      const document = await this.documentService.getDocumentById( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  updateDocumentById = async ( req, res, next ) => {
    try {
      const document = await this.documentService.updateDocumentById( req.params.id, req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};