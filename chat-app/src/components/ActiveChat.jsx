import React from 'react'
import { useSelector } from 'react-redux';

const ActiveChat = () => {
  const {ClickUser}=useSelector(store=>store.Users);
  if(!ClickUser)  return;
  const handleClick=()=>{
    document.getElementById("3").style.display="none";
  }
  
  return (
   
        
        <div className="profile-container pc "> <div onClick={handleClick}><i class=' arrow  bx bx-left-arrow-alt'></i></div>
        <div className='icon-container  mobile-view' > 
  <img src={ClickUser.profilePhoto}  alt=''/>
  <div className='st '>
  <span>   {ClickUser.Fullname}</span>
  </div>

</div>  </div> 
   
  )
}

export default ActiveChat;
