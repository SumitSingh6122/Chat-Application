import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOthers } from '../redux/userSlice';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                 axios.defaults.withCredentials = true;
                const res = await axios.get(`https://chat-application-r2bx.onrender.com/api/v1/user`);
                //
                console.log("other users -> ",res);
                dispatch(setOthers(res.data));
            } catch (error) {
                console.log(error);
            }
        };

        fetchOtherUsers();
    }, []);
};

export default useGetOtherUsers;
