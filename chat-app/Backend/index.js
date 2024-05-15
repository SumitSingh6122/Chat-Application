import express, { json } from 'express';
import dotenv from 'dotenv';
import ConnectionDB from './config/DatabaseConnection.js';
import userRoute  from './Routers/userRoute.js';
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser'
import messageRouter from './Routers/messageRouter.js';
import cros from 'cors';
import {app,server} from './soket/socketio.js';

dotenv.config({
   path:"./Routers/.env",
});
ConnectionDB();
const corsOption={
   origin:'https://chat-application-rosy-psi.vercel.app',
   credentials:true
}
app.use(cros(corsOption));


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/user',userRoute);
app.use('/api/v1/message',messageRouter);
server.listen(process.env.PORT,()=>{
console.log(`Server is running on Port ${process.env.PORT}`);
});
