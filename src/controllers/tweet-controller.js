import TweetService from '../services/tweet-service.js';

const tweetService = new TweetService();

export const createTweet=async (req,res)=>{
    try {
        const tweet=await tweetService.create(req.body);
        return res.status(201).json({
            success:true,
            message:"Successfully created a Tweet",
            err:{},
            data:tweet
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            err:error,
            data:{}
        });
        
    }
}

export const getTweet=async (req,res)=>{
    try {
        const tweet=await tweetService.get(req.params.id);
        return res.status(200).json({
            success:true,
            message:"Successfully fetched a Tweet",
            err:{},
            data:tweet
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            err:error,
            data:{}
        });
        
    }
}