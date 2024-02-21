import express from 'express';
import { connect } from './config/database.js'
const app=express();

import service from './services/tweet-service.js';

    app.listen(3000,async ()=>{
        console.log("Server started");
        await connect();
        console.log("database connected");
        const ser =new service();
        const tweet =await ser.create({
            content:'#modified content'
        });
        console.log(tweet);
    });