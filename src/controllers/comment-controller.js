import CommentService from '../services/comment-service.js';

const commentService=new CommentService();

export const createComment=async (req,res)=>{
    try {
        const response=await commentService.createComment(req.query.modelId,req.query.modelType,req.user.id,req.body.content);
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:"Succesfully created comment"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:"Something went wrong"
        });
    }
} 