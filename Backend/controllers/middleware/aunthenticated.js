
import jwt from 'jsonwebtoken';

export const aunthenticated = async(req,res,next) => {
  try {
    const token=req.cookies.token;
    if(!token){
       return  res.status(401).json({
            message:'invalid user',
          
        })
    }
    const decode=await jwt.verify(token,"sajhghjcgjsdckug");
    if(!decode){
        return res.status(401).json({
            message:"invalid token"
        })
    };
    req.id=decode.userId;

  next();
    
  } catch (error) {
    
  }
}
export default aunthenticated;
