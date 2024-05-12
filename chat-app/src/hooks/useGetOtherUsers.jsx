import axios from 'axios';
import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOthers } from '../redux/userSlice';

const useGetOtherUsers =() => {
    const dispatch = useDispatch();
   
    
    useEffect(() => { 
        const featchotherusers = async () => {
            try {
                axios.defaults.withCredentials=true;
                const res = await axios.get(`http://localhost:8080/api/v1/user`);
                dispatch(setOthers(res.data));
            } catch (error) {
                console.log(error);
            }

        }
        featchotherusers();
    },[dispatch])
};

export default useGetOtherUsers;