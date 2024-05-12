import MessageConatiner from './MessageConatiner';
import './container.css';
import SearchBar from './serchBar';
const AppContainer = () => {
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
