import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setgetmessage } from '../redux/messageSlice';

const useGetRealTimeMessage = () => {
  const {socket}=useSelector(store=>store.Socket);
  const {getmessage} =useSelector(store=>store.Message)
  const dispatch=useDispatch();

 useEffect( ()=>{
  socket?.on("newMessage",(newMessage)=>{
    dispatch(setgetmessage([...getmessage,newMessage]));
  });
  return ()=>{
    socket?.off("newMessage");

  }
 },[getmessage,dispatch,socket])


}

export default useGetRealTimeMessage;