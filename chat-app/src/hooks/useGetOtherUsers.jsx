import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setOthers } from '../redux/userSlice';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
        const {AuthenthecatedUser}=useSelector(store=>store.Users);

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                // Set Axios configuration for cross-origin requests
                axios.defaults.withCredentials = true;

                const res = await axios.get('https://chat-application-r2bx.onrender.com/api/v1/user');

                // Dispatch the retrieved data to Redux store
                dispatch(setOthers(res.data));
            } catch (error) {
                // Handle errors
                console.error('Error fetching other users:', error);
            }
        };

        fetchOtherUsers();
    }, [dispatch,AuthenthecatedUser]);
};

export default useGetOtherUsers;
