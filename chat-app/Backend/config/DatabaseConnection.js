import mongoose from "mongoose";
import dotenv from "dotenv";
const ConnectionDB=async()=>{
await mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("database connected succesfully")
}).catch((error)=>{
console.log(error);
})
};
export default ConnectionDB;
