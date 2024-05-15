import mongoose from "mongoose";
import { User } from "./UserSchema.js";

const MessageSchema=mongoose.Schema({
senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
message:{
    type:String,
    required:true
}

},{timestamps:true}
);
export const Message=mongoose.model("Message",MessageSchema);