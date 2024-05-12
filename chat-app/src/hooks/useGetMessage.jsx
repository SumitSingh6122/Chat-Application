import axios from 'axios';
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setgetmessage } from '../redux/messageSlice';



const useGetMessage = () => {
const dispatch =useDispatch();
const {ClickUser} =useSelector(store=>store.Users);
useEffect(()=>{
    const featchMessage=async()=>{
        try {
          axios.defaults.withCredentials=true;
          const res=await axios.get(`http://localhost:8080/api/v1/message/${ClickUser?._id}`);
           dispatch(setgetmessage(res.data));
        
        } catch (error) {
            console.log(error);
        }
    }
    
featchMessage();
  
},[ClickUser,dispatch]);
}

export default useGetMessage;

