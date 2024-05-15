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
                 const token = 'sgscdgjsfvsjsk'; 
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'

        };
                const res = await axios.get(`http://localhost:8080/api/v1/user`,{
                  headers: headers,
            withCredentials: true
                });
                dispatch(setOthers(res.data));
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Response Error:', error.response.data);
                    console.error('Status Code:', error.response.status);
                    console.error('Headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Request Error:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.error('Request Setup Error:', error.message);
                }
                console.error('Error Config:', error.config);
            }
        };

        fetchOtherUsers();
    }, [dispatch]);
};

export default useGetOtherUsers;
