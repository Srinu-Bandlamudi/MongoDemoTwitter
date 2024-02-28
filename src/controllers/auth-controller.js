import UserService from "../services/user-service.js";

const userService=new UserService();

export const signup=async (req,res)=>{
    try {
        const user=await userService.signup({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        });
        return res.status(201).json({
            success:true,
            data:user,
            message:"succesfully created a new user",
            err:{}
        });
    } catch (error) {
        return res.status(201).json({
            success:false,
            data:{},
            message:"Something went wrong",
            err:error
        });
    }
}