import React from 'react'
import { useSelector } from 'react-redux';

const ActiveChat = () => {
  const {ClickUser}=useSelector(store=>store.Users);
  if(!ClickUser)  return;
  return (
   
        
        <div className="profile-container pc ">
        <div className='icon-container'>
  <img src={ClickUser.profilePhoto}  alt=''/>
  <div className='st '>
  <span>{ClickUser.Fullname}</span>
  </div>

</div>  </div> 
   
  )
}

export default ActiveChat;
