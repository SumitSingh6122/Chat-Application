import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const Chat = ({msg}) => {
    const scroll=useRef();
    const {AuthenthecatedUser,ClickUser} =useSelector(store=>store.Users);
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"});
    },[msg]);
  return (
    <div>
         <div ref={scroll} className={`chat  ${msg?.senderId===AuthenthecatedUser?._id ? 'chat-end':'chat-start'} `}>
  <div className="chat-image avatar">
    <div className="w-8 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={` ${msg?.senderId===AuthenthecatedUser?._id ? AuthenthecatedUser?.profilePhoto : ClickUser?.profilePhoto}`} />
    </div>
  </div>
  <div className="chat-header">
    
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">{msg?.message}</div>
  
</div>
    </div>
  )
}

export default Chat;