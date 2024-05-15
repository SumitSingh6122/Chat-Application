import MessageConatiner from './MessageConatiner';
import './container.css';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import SearchBar from './serchBar';
const AppContainer = () => {
  useGetOtherUsers();
  return (
    <div  className='cover-box'>
        <div className="box " >
        <SearchBar/>
      
        </div>
       
        <MessageConatiner/>

    </div>
  )
}
export default AppContainer;
