import React from 'react'
import useGetMessage from '../hooks/useGetMessage';
import { useSelector } from 'react-redux';
import Chat from './chat';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';


const Message = () => {
  useGetMessage();
  useGetRealTimeMessage();
  const {getmessage} =useSelector(store=>store.Message);
 return(
    <div className='message-area'>
      {
        getmessage && getmessage?.map((msg)=>{
         return (   <Chat key={msg._id} msg={msg}/>)
        })

      }
      
    </div>
 )
  
}

export default Message;