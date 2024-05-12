import { useSelector } from 'react-redux';
import ActiveChat from './ActiveChat';
import InputChat from './InputChat';

import './container.css';

import Message from './Message';
const MessageConatiner = () => {

  const {ClickUser,AuthenthecatedUser} =useSelector(store=>store.Users);

  
  return (
    <>
    {
      ClickUser?(  <div className='message-profile'>
      <ActiveChat/>
     
      <Message/>
     
      
      <InputChat/>
  </div> ):(<div className='div-img'> <img className='img' src='https://pbs.twimg.com/media/EiX3qArWsAAc-aw.jpg' alt='hello' /> <h1>Hello, {AuthenthecatedUser?.Fullname}</h1><h2>Let's <br /> start the  <br /> conversation</h2></div>)
    } 
    
    </>
  )
}

export default MessageConatiner;