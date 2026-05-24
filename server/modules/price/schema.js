import { z } from 'zod';

export const PriceSchema = z.object( {
  amount: z.number(),
  validFrom: z.string().optional(),
  validTo: z.string().optional(),
  productId: z.string()
} );

export const FilteringSchema = PriceSchema.partial();

export const SortingSchema = z.object( {
  order: z.preprocess(
    v => [ 'asc', 'desc' ].includes( v ) ? v : undefined,
    z.enum( [ 'asc', 'desc' ] ).default( 'desc' ).optional()
  ),
  sort: z.preprocess(
    v => [ 'id', 'amount', 'validFrom', 'validTo', 'productId' ].includes( v ) ? v : undefined,
    z.enum( [ 'id', 'amount', 'validFrom', 'validTo', 'productId' ] ).default( 'id' ).optional()
  )
} );

export const PaginationSchema = z.object( {
  limit: z.string().transform( v => Number( v ) < 1 ? 0 : Number( v ) ).default( 10 ).optional(),
  page: z.string().transform( v => Number( v ) < 1 ? 1 : Number( v ) ).default( 1 ).optional()
} );