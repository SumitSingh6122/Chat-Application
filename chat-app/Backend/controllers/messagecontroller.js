import { Message } from "../Models/chats.js";
import { Conversation } from "../Models/conversation.js";
import { getReceiverSocketId, io } from "../soket/socketio.js";


export const sendMessage=async(req,res)=>{
    try {
    const senderId=req.id;
    const receiverId=req.params.id;
    const {message}=req.body;
    let gotconversation=await  Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    });
    if(!gotconversation){
        gotconversation=await Conversation.create({
            participants:[senderId,receiverId]
        })
    };
    const newMessage=await Message.create({
        senderId,
        receiverId,
        message
    });
    if(newMessage){
gotconversation.messages.push(newMessage._id);
    };
    await Promise.all([gotconversation.save(),newMessage.save()]);
    const receiverSocketId=getReceiverSocketId(receiverId);
    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage",newMessage)
    }
    return res.status(201).json({
        newMessage
    })
} catch (error) {
      console.log(error);  
}


}
export const getMessage=async(req,res)=>{
    const receiverId=req.params.id;
   const  senderId=req.id;
   const conversations= await Conversation.findOne({
    participants:{$all:[senderId,receiverId]}
   }).populate("messages");
   return res.status(201).json(conversations?.messages);
}