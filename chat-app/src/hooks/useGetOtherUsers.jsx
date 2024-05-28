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

                axios.defaults.withCredentials = true;

                const res = await axios.get('https://chat-application-r2bx.onrender.com/api/v1/user');

            
                dispatch(setOthers(res.data));
            } catch (error) {
            
                console.error('Error fetching other users:', error);
            }
        };

        fetchOtherUsers();
    }, []);
};

export default useGetOtherUsers;
