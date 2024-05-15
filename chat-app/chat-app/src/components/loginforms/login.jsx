import { useState } from 'react';
import './style.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthenticatedUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [signUp,setsignUp]=useState(true);
  const [user,setuser]=useState({
    Fullname:"",
    userId:"",
    password:"",
    confirmPass:"",
    Gender:""
  })
  
  const handlesignUp=()=>{
    if(signUp===true){
    setsignUp(false);
    }
    else{
      setsignUp(true);
    }
  }
  const handleGenderChange = (e) => {
    setuser({ ...user, Gender: e.target.value });
  }
  const submitHandler= async(e)=>{
    e.preventDefault();
    
    if(signUp){
    try {
      axios.defaults.withCredentials=true;
      const res= await axios.post('https://chat-application-r2bx.onrender.com/api/v1/user/register',user,{
       headers:{
         "Content-type":'application/json'
       },withCredentials:true
      })
      
      if(res?.data.success){
       toast.success(res?.data.message);
       setsignUp(false);
      }


     } catch (error) {
   toast.error(error.response.data.message);
     }
  
  }
  else{
    const userId=user.userId;
    const password=user.password;
    try {
      axios.defaults.withCredentials=true;
      const res= await axios.post('https://chat-application-r2bx.onrender.com/api/v1/user/login',{userId,password},{
       headers:{
         "Content-type":'application/json'
       },withCredentials:true
      })
    
      dispatch(setAuthenticatedUser(res.data));
      if(res.data.success){
       toast.success(res.data.message);
       navigate('/browse');
      }


     } catch (error) {
   toast.error(error.response.data.message);
     }
  }
  }
 
  return (
    <div><form className='login-form' onSubmit={submitHandler}> 
        <div className="container">
          <h1>{!signUp?"Log In":"Sign In"}</h1>{signUp && 
          <div className="input-container"><span>Full name </span><input className='input' type="text" value={user.Fullname} placeholder='your name...' onChange={(e)=>setuser({...user,Fullname:e.target.value})}/></div>}
          <div className="input-container"> <span>User name</span> <input type="text"className='input' value={user.userId} placeholder='User id' onChange={(e)=>setuser({...user,userId:e.target.value})} /></div>
          <div className="input-container"> <span>Password</span> <input type="password" className='input' value={user.password} placeholder='password' onChange={(e)=>setuser({...user,password:e.target.value})} /></div>{signUp &&
         <> <div className="input-container"> <span>Confirm Password</span><input className='input' type="password" value={user.confirmPass} placeholder='Confirm Password' onChange={(e)=>setuser({...user,confirmPass:e.target.value})}/></div>
          <span className='gender'>Gender </span>
          <div className="radio-btn">
                <input type="radio" id="male" value="male" checked={user.Gender === "male"} onChange={handleGenderChange} />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" value="female" checked={user.Gender === "female"} onChange={handleGenderChange} />
                <label htmlFor="female">Female</label>
              </div></>}
          <div className="text">
            <a href="http://goooglr.com"><p >Forget password ? </p></a>
            <p onClick={handlesignUp}> { !signUp ?"Don't have account ? Create new account ":"Alredy have Account ? Log In"}</p>
          </div>
          <div className="bttn"><button className='button'>{!signUp?"Log In":"Sign In"}</button> </div>
        </div>
        </form></div>
  )
}

export default Login;
