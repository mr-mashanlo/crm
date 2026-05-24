import { z } from 'zod';

export const TransactionSchema = z.object( {
  quantity: z.number(),
  price: z.number(),
  documentId: z.string(),
  productId: z.string(),
  warehouseId: z.string()
} );

export const FilteringSchema = TransactionSchema.partial();

export const SortingSchema = z.object( {
  order: z.preprocess(
    v => [ 'asc', 'desc' ].includes( v ) ? v : undefined,
    z.enum( [ 'asc', 'desc' ] ).default( 'desc' ).optional()
  ),
  sort: z.preprocess(
    v => [ 'id', 'quantity', 'price', 'documentId', 'productId', 'warehouseId' ].includes( v ) ? v : undefined,
    z.enum( [ 'id', 'quantity', 'price', 'documentId', 'productId', 'warehouseId' ] ).default( 'id' ).optional()
  )
} );

export const PaginationSchema = z.object( {
  limit: z.string().transform( v => Number( v ) < 1 ? 0 : Number( v ) ).default( 10 ).optional(),
  page: z.string().transform( v => Number( v ) < 1 ? 1 : Number( v ) ).default( 1 ).optional()
} );