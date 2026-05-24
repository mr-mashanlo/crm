import 'dotenv/config';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { errorHandler } from './middlewares/error-handler.js';
import { balanceRouter } from './modules/balance/router.js';
import { documentRouter } from './modules/document/router.js';
import { documentLineRouter } from './modules/document-line/router.js';
import { priceRouter } from './modules/price/router.js';
import { productRouter } from './modules/product/router.js';
import { transactionRouter } from './modules/transaction/router.js';
import { userRouter } from './modules/user/router.js';
import { warehouseRouter } from './modules/warehouse/router.js';

const app = express();

app.use( cors( { credentials: true, origin: process.env.FRONT_URL } ) );
app.use( cookieParser() );
app.use( express.json() );

app.use( '/api', userRouter );
app.use( '/api', warehouseRouter );
app.use( '/api', productRouter );
app.use( '/api', priceRouter );
app.use( '/api', documentRouter );
app.use( '/api', transactionRouter );
app.use( '/api', balanceRouter );
app.use( '/api', documentLineRouter );

app.use( errorHandler );

app.listen( process.env.APP_PORT, () => {
  console.log( `Server flying at http://localhost:${process.env.APP_PORT}` );
} );
