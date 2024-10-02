import express from 'express';
import { connect } from './config/database.js'
const app=express();

import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';

import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api',apiRoutes);

app.listen(3007,async ()=>{
    console.log("Server started");
    await connect();
    console.log("database connected"); 
});