import Home from './components/loginforms/home';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppContainer from './components/appContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import io from 'socket.io-client';
import { setOnlineUser } from './redux/userSlice';
import { setsocket } from './redux/socket';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/browse',
    element: <AppContainer />
  }
]);
function App() {
  
   const dispatch=useDispatch();
const {socket}=useSelector(store=>store.Socket);
  const { AuthenthecatedUser } = useSelector(store => store.Users);

  useEffect(()=>{
    
    if(AuthenthecatedUser){
      const socketio = io('https://chat-application-r2bx.onrender.com',{
          query:{
            userId:AuthenthecatedUser._id
          }
      });
      dispatch(setsocket(socketio));
      console.log("user connected");
      socketio?.on('getOnlineUsers', (onlineUsers)=>{
        dispatch(setOnlineUser(onlineUsers))
      });
      return () => socketio.close();
    }else{
      if(socket){
        socket.close();
        dispatch(setsocket(null));
      }
    }

  },[AuthenthecatedUser?._id]);

  return (
    <div className="App">
      <RouterProvider router={routers} />
      <Toaster/>
    </div>
  );
}

export default App;
