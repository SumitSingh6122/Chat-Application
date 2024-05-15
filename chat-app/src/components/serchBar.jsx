import { useDispatch, useSelector } from 'react-redux';
import OtherusersConatiner from './OtherusersConatiner';
import './container.css';
import { useState } from 'react';
import { setOthers } from '../redux/userSlice';
import toast from 'react-hot-toast';



const SearchBar = () => {
  
  const [search,setsearch]=useState('');

  const {Others}=useSelector(store=>store.Users)
  const dispatch=useDispatch();
const hansdleSearch=(e)=>{
e.preventDefault();
if(Others){
const searchUser=Others?.find((user)=>user?.Fullname.toLowerCase().includes(search.toLowerCase()));
dispatch(setOthers([searchUser]));
}else{
  toast.error('users not Found !!');
}

}
  return (
    <div className='searchbar'> 
   <form className='form' onSubmit={hansdleSearch}>
    <input className='inputt' value={search} type='text' onChange={(e)=>setsearch(e.target.value)} placeholder='Serch here ..'/>
    <button  className='search-btn'  type='submit'><i class='bx bx-search'></i></button>
   </form>
      <div className='otherusers-box'>
        <OtherusersConatiner/>
      </div>
      
    </div>
  )
}

export default SearchBar;