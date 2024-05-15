import jwt from 'jsonwebtoken';

 const aunthenticated = async(req,res,next) => {
  try {
    const token=req.cookies.token;
    if(!token){
       return  res.status(404).json({
            message:'invalid user',
          
        })
    }
    const decode=await jwt.verify(token,"sgscdgjsfvsjsk");
    if(!decode){
        return res.status(200).json({
            message:"invalid token"
        })
    };
    req.id=decode.userId;

  next();
    
  } catch (error) {
    console.log(error);
  }
};
export default aunthenticated;
