import { User } from "../Models/UserSchema.js";
import jwt from 'jsonwebtoken';
import bcryptjs from "bcryptjs";

export const Register=async(req,res)=>{
    try {
        const {Fullname,userId,password,confirmPass,Gender}=req.body;
        if(!Fullname || !userId || !password || !confirmPass || !Gender){
            return res.status(400).json({
                message:"ALL fields are required ",
                success:false
            })
        }
        if(password!=confirmPass){
            return res.status(400).json({
                message:"password do not match",
                success:false
            })
        }
        const user= await User.findOne({userId});
        if(user){
            return res.status(401).json({
                message:" Oops ! User Id alredy exists",
                success:false
            })
        }
        const hashedpassword= await bcryptjs.hash(password,10);
        const male_profile=`https://avatar.iran.liara.run/public/boy?username=${userId}?`;
        const female_profile=`https://avatar.iran.liara.run/public/girl?username=${userId}?`;
        await User.create({
            Fullname,
            userId,
            password:hashedpassword,
            profilePhoto:Gender==="male"?male_profile:female_profile ,
            Gender 
        })
        return res.status(200).json({
            message:"Account Created Succesfully",
            success:true
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const Login= async (req,res)=>{
try {
   const {userId,password}=req.body;
   if (!userId || !password) {
     return res.status(400).json({
        message:"invalid Data entry",
        success:false
    })
   } 
   const user= await User.findOne({userId});
   if(!user){
   return res.status(400).json({
        message:"invalid username & password",
        success:false
    })
   }
   const match=await bcryptjs.compare(password,user.password);
   if(!match){
    return res.status(400).json({
        message:"invalid username & password",
        success:false
    })
   }
const tokendata={
    userId:user._id
}
const token= await jwt.sign(tokendata,'sajhghjcgjsdckug',{expiresIn:'1d'});

   return res.status(200).cookie("token",token, { maxAge:1*24*60*60*100, httpOnly:true, secure:true,sameSite:'None'}).json({
    _id:user._id,
    Fullname:user.Fullname,
    userId:user.userId,
    profilePhoto:user.profilePhoto,
    message:'user login successfully',
    success:true
   });
} catch (error) {
    console.log(error);
}
}
export const logout=async(req,res)=>{

return  res.status(200).cookie("token","",{expireIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User Logout succesfully",
        success:false
    })
}
export const otheruser=async(req,res)=>{
    try {
        
        const loggeduser=req.id;
        const otherusers=await User.find({_id:{$ne:loggeduser}}).select(-"password");
return res.status(200).json(otherusers);

    } catch (error) {
       console.log(error); 
    }
}
