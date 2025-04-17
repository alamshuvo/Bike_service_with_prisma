import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import cookieParser from 'cookie-parser'
import router from './app/routes';
import notFound from './app/middleware/notFoundRoute';
const app:Application = express();

app.use(cors());
app.use(cookieParser())
//parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req:Request,res:Response)=>{
    res.send({
        Message:"Bike Server  Server..."
    })
})
 app.use('/api',router);
// app.use(globalErrorHandler);

app.use(notFound)
export default app ;