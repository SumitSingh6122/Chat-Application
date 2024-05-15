import mongoose from "mongoose";
const UserSchema=mongoose.Schema({
  Fullname:{
    type:String,
    required:true
  },
  userId:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
  ,
  profilePhoto:{
    type:String,
    default:""
    
  },
  Gender:{
    enum:["male","female"],
    type:String,
    required:true
  }
},{timestamps:true});
export const User=mongoose.model("User",UserSchema);