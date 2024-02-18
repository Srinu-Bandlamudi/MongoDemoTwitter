const {TweetRepository}=require('../repository/index');

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
    }
    
    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags
        tags=tags.map((tag)=>tag.substring(1));
        consolelog(tags);
        const tweet =await this.tweetRepository.create(data);


        /***
         * 1.bulkcreate in mongoose
         * 2.filter title of hashtags based on multiple tags
         * 3. How to add tweet inside all hashtags 
         * 
         */
        return tweet;
    }
}

module.exports=TweetService;