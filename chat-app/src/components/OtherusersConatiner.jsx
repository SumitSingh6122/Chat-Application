import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Otherusers from './Otherusers';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';
import { setAuthenticatedUser } from '../redux/userSlice';


const OtherusersConatiner = ({search}) => {
  const dispatch=useDispatch();
   useGetRealTimeMessage();
   const navigate=useNavigate();
  const {Others}=useSelector(store=>store.Users);
  if (!Others) {
    return <div>Loading...</div>; 
  }
 const handleLogout=async()=>{
try {
  const res= await axios.get("https://chat-application-r2bx.onrender.com/api/v1/user/logout");
  navigate('/');
  toast.success(res.data.message);
  dispatch(setAuthenticatedUser(null));
} catch (error) {
  console.log(error);
}
 }
 const OtherUsersData= search ? Others.filter(user => user?.Fullname?.toLowerCase().includes(search.toLowerCase())) : Others;
if(!OtherUsersData){
  toast.error("User not found")
}

  return (
    <div className='otheruser-container'>
     {OtherUsersData.length > 0 ? (
        OtherUsersData.map(user => (
          <Otherusers key={user?._id} user={user} />
        ))
      ) : (
        <div>User Not Found</div>
      )}

      <div className="logout item-center flex justify-center "><button className='logout-btn' onClick={handleLogout}>Logout<i class='bx bx-log-out'></i></button></div> 
    </div>
  )
}

export default OtherusersConatiner;
