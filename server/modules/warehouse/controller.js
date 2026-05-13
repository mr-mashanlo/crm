export class WarehouseController {

  constructor( warehouseService ) {
    this.warehouseService = warehouseService;
  };

  createWarehouse = async ( req, res, next ) => {
    try {
      const document = await this.warehouseService.createWarehouse( req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  deleteWarehouse = async ( req, res, next ) => {
    try {
      const document = await this.warehouseService.deleteWarehouse( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getWarehouses = async ( req, res, next ) => {
    try {
      const document = await this.warehouseService.getWarehouses( req.query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getWarehouseById = async ( req, res, next ) => {
    try {
      const document = await this.warehouseService.getWarehouseById( req.params.id );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  updateWarehouseById = async ( req, res, next ) => {
    try {
      const document = await this.warehouseService.updateWarehouseById( req.params.id, req.body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};