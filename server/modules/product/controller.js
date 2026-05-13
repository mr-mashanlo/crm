export class ProductController {

  constructor( productService ) {
    this.productService = productService;
  };

  createProduct = async ( req, res, next ) => {
    try {
      const document = await this.productService.createProduct( req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  deleteProduct = async ( req, res, next ) => {
    try {
      const document = await this.productService.deleteProduct( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getProducts = async ( req, res, next ) => {
    try {
      const document = await this.productService.getProducts( req.query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getProductById = async ( req, res, next ) => {
    try {
      const document = await this.productService.getProductById( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  updateProductById = async ( req, res, next ) => {
    try {
      const document = await this.productService.updateProductById( req.params.id, req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};