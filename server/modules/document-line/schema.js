import { z } from 'zod';

export const DocumentLineSchema = z.object( {
  quantity: z.number(),
  price: z.number(),
  documentId: z.string(),
  productId: z.string(),
  warehouseId: z.string()
} );

export const FilteringSchema = DocumentLineSchema.partial();

export const SortingSchema = z.object( {
  order: z.preprocess(
    v => [ 'asc', 'desc' ].includes( v ) ? v : undefined,
    z.enum( [ 'asc', 'desc' ] ).default( 'desc' ).optional()
  ),
  sort: z.preprocess(
    v => [ 'id', 'type', 'status' ].includes( v ) ? v : undefined,
    z.enum( [ 'id', 'type', 'status' ] ).default( 'id' ).optional()
  )
} );

export const PaginationSchema = z.object( {
  limit: z.string().transform( v => Number( v ) < 1 ? 0 : Number( v ) ).default( 10 ).optional(),
  page: z.string().transform( v => Number( v ) < 1 ? 1 : Number( v ) ).default( 1 ).optional()
} );