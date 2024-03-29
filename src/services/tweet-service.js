import {TweetRepository,HashtagRepository} from '../repository/index.js';

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();

    }
    
    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substring(1).toLowerCase()); //this regex extracts hashtags
        const tweet =await this.tweetRepository.create(data);
        let alreadyCreatedTags=await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags=alreadyCreatedTags.map(tags=>tags.title);
        let newTags=tags.filter(tag=>!titleOfPresenttags.includes(tag));
        newTags=newTags.map(tag=>{
            return {title:tag,tweets:[tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyCreatedTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        });

       return tweet;
    }
    async get(tweetId){
        const tweet=await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
    
}

export default TweetService;