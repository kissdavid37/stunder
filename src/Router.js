import * as React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Questions from './Components/Questions';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Chats from './Components/Chats';
import Chat from './Components/Chat';
import Register from './Components/Register';



const questions=React.lazy(()=>import('./Components/Questions'));
const login=React.lazy(()=>import('./Components/Login'));
const register=React.lazy(()=>import('./Components/Register'));
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