import { useDispatch, useSelector } from 'react-redux';
import './container.css';
import { setClickUser } from '../redux/userSlice';

const Otherusers = ({user}) => {
  const {ClickUser,OnlineUser} =useSelector(store=>store.Users);
  const isOnline=OnlineUser?.includes(user?._id);
  const dispatch=useDispatch();
  const handleclick=(user)=>{
     dispatch(setClickUser(user));
  }
  return (
    <div>
        <div onClick={()=>handleclick(user)} className={`profile-container ${ClickUser?._id !== user?._id ? 'bg-blue-200':'bt'}`} >
        <div className='icon-container'>
  <img src={user.profilePhoto} alt=''/>
  <div className={ `status-circle  ${ isOnline ? 'online-user':''}`}>
  <span>{user?.Fullname }</span>
  </div>

</div>  </div> 
    </div>
  )
}

export default Otherusers;