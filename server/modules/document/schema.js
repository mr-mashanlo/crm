import { z } from 'zod';

export const DocumentSchema = z.object( {
  type: z.enum( [ 'RECEIPT', 'SALE', 'TRANSFER', 'WRITE_OFF' ] ),
  status: z.enum( [ 'DRAFT', 'COMPLETED', 'CANCELLED' ] ),
  createdAt: z.string().optional()
} );

export const FilteringSchema = DocumentSchema.partial();

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