import { z } from 'zod';

export const WarehouseSchema = z.object( {
  code: z.string(),
  address: z.string()
} );

export const FilteringSchema = WarehouseSchema.partial();

export const SortingSchema = z.object( {
  order: z.preprocess(
    v => [ 'asc', 'desc' ].includes( v ) ? v : undefined,
    z.enum( [ 'asc', 'desc' ] ).default( 'desc' ).optional()
  ),
  sort: z.preprocess(
    v => [ 'id', 'code', 'address' ].includes( v ) ? v : undefined,
    z.enum( [ 'id', 'code', 'address' ] ).default( 'id' ).optional()
  )
} );

export const PaginationSchema = z.object( {
  limit: z.string().transform( v => Number( v ) < 1 ? 0 : Number( v ) ).default( 10 ).optional(),
  page: z.string().transform( v => Number( v ) < 1 ? 1 : Number( v ) ).default( 1 ).optional()
} );