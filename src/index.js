import express from 'express';
import { connect } from './config/database.js'
const app=express();

import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';

import {TweetRepository,UserRepository} from './repository/index.js';
import LikeService from './services/like-service.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);

    app.listen(3007,async ()=>{
        console.log("Server started");
        await connect();
        console.log("database connected");

        // const userRepo=new UserRepository();
        // const tweetRepo=new TweetRepository();
        // const tweets=await tweetRepo.getAll(0,10);
       
        // const users=await userRepo.getAll(); 
        // const likeService=new LikeService();
        // await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id);        
    });