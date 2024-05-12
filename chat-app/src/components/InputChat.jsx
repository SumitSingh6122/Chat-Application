import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setgetmessage } from '../redux/messageSlice';


const InputChat = () => {
  const [message,setmessage]=useState('');
  const dispatch=useDispatch();
  const {ClickUser} =useSelector(store=>store.Users);
  const {getmessage} =useSelector(store=>store.Message);
  const handleMsaage=async(e)=>{
    e.preventDefault();
    try {
          axios.defaults.withCredentials=true;
      const res=await axios.post(`http://localhost:8080/api/v1/message/send/${ClickUser?._id}` ,{message},{
        headers:{
          'Content-Type':'application/json'
        },withCredentials:true
      });
      dispatch(setgetmessage([...getmessage, res?.data.newMessage]));
    } catch (error) {
      console.log(error);
    }finally{
      setmessage('');
    }
  }
  return (
    <div>
     <form onSubmit={handleMsaage}>
      <div className="chat-input">
        <input value={message} type="text" className='chat-in'  placeholder='Send message...' onChange={((e)=>setmessage(e.target.value))}/>
       <button type='submit' > <i class='bx bx-send  send-icon' ></i></button>
      </div>

     </form>

    </div>
  )
}

export default InputChat;