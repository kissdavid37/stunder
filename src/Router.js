import * as React from 'react';
import {Route,Routes} from 'react-router-dom';
import Profile from './Components/Profile';
import Chats from './Components/Chats';
import Chat from './Components/Chat';




 const Questions=React.lazy(()=>import('./Components/Questions'));
 const Login=React.lazy(()=>import('./Components/Login'));
 const Register=React.lazy(()=>import('./Components/Register'));
const Routing=()=>{
    return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/question' element={<Questions />} />
        <Route  path='/profile' element={<Profile />}/>
        <Route  path='/chats' element={<Chats />}/>
        <Route  path='/chat' element={<Chat />}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>)
}

export default Routing