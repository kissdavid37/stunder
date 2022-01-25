import React from 'react';
import './App.css';
import Header from './Components/Header';
/*import TinderCards from './Components/TinderCards';*/
import Questions from './Components/Questions';
import SwipeButtons from './Components/SwipeButtons';
import Chats from './Components/Chats';
import ChatScreen from './Components/ChatScreen';
import Profile from './Components/Profile';
import Login from './Components/Login';
import routing from './Router';
import Routing from './Router';
import {useNavigate} from 'react-router-dom';

function App() {
 const token =localStorage.getItem('token');
 const history=useNavigate();
 if (token==null){
   history('/login',{replace:true});
 }
 if(window.location.href.endsWith('/register')){
   return(<Routing></Routing>)
 }
  return (
    <div className="App">
          {/*header */}
          <Header/>
          <Routing/>

    </div>
  );
}

export default App;


