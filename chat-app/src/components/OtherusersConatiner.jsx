import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Otherusers from './Otherusers';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';
import { setAuthenticatedUser } from '../redux/userSlice';


const OtherusersConatiner = () => {
  const dispatch=useDispatch();
   useGetOtherUsers();
   useGetRealTimeMessage();
   const navigate=useNavigate();
  const {Others}=useSelector(store=>store.Users);
 const handleLogout=async()=>{
try {
  const res= await axios.get("http://localhost:8080/api/v1/user/logout");
  navigate('/');
  toast.success(res.data.message);
  dispatch(setAuthenticatedUser(null));
} catch (error) {
  console.log(error);
}
 }
  return (
    <div className='otheruser-container'>
      {
        Others?.map((user)=>{
          return(
            <Otherusers  key={user._id} user={user}/> 
          )
        })
      }

      <div className="logout item-center flex justify-center "><button className='logout-btn' onClick={handleLogout}>Logout<i class='bx bx-log-out'></i></button></div> 
    </div>
  )
}

export default OtherusersConatiner;