const express=require('express');
const connect=require('./config/database');
const app=express();
const TweetRepository=require('./repository/tweet-repository');

const Comment=require('./models/comment');

    app.listen(3000,async ()=>{
        console.log("Server started");
       await connect();
        console.log("database connected");
        const tweetRepo=new TweetRepository();
        const tweet=await tweetRepo.getWithComments('65ccce07cd78b58d6e306f0e');
        console.log(tweet);
    });