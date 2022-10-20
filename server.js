import express, { application } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js'
import productRouts from './routes/productsRoutes.js'
import indexRouter from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import usertRouts from './routes/userRoutes.js'


import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); 
connectDB()

// var cors = require('cors');

const app = express();
export default app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use ('/api/products',productRouts)
app.use('/api/users',usertRouts)

app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT || 5000
app.listen(port , console.log("server is runing on port ",{port}))

