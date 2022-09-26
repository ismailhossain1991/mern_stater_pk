import express, { json } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.js';
import userRoute from './routes/user.js';
import mongoDBConnect from './config/db.js';
import errorHandler from './middlewares/errorHandeler.js';
import cookieParser from 'cookie-parser';


// init express
const app = express();
dotenv.config();



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cookieParser());



// init env variable
const PORT = process.env.SERVER_PORT ||5000;


// route Rest Api
app.use('/api/student', studentRoute);
app.use('/api/user', userRoute);



// Express error handeler
app.use(errorHandler);


//listen server
app.listen(PORT, () => {

    //Mongodb Connection
    mongoDBConnect();
    console.log(`server is running on port ${PORT}`.bgCyan.black);
});