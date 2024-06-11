import OtherusersConatiner from './OtherusersConatiner';
import './container.css';
import { useEffect, useState } from 'react';




const SearchBar = () => {
  
  const [search,setsearch]=useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [search]);
 
  
const hansdleSearch=(e)=>{
e.preventDefault();


}
  return (
    <div className='searchbar'> 
   <form className='form' onSubmit={hansdleSearch}>
    <input className='inputt' value={search} type='text' onChange={(e)=>setsearch(e.target.value)} placeholder='Serch here ..'/>
    <button  className='search-btn'  type='submit'><i class='bx bx-search'></i></button>
   </form>
      <div className='otherusers-box'>
        <OtherusersConatiner  search={debouncedSearch} />
      </div>
      
    </div>
  )
}

export default SearchBar;
