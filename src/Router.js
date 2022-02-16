import * as React from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import Profile from './Components/Profile';
import Chats from './Components/Chats';
import useAuth from './Contexts/authContext'

function RequireAuth({ children }) {
    const { authed } = useAuth();

    return authed === true
        ? children
        : <Navigate to="/login" replace />;
}

 const Questions=React.lazy(()=>import('./Components/Questions'));
 const Login=React.lazy(()=>import('./Components/Login'));
 const Register=React.lazy(()=>import('./Components/Register'));
 const CreateQuestion=React.lazy(()=>import('./Components/CreateQuestion'));
const Routing=()=>{
    return (
    <Routes>
        <Route path='/' element={<RequireAuth><Questions /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/question' element={<RequireAuth><Questions /></RequireAuth>} />
        <Route  path='/profile' element={<Profile />}/>
        <Route  path='/chats' element={<Chats />}/>
        <Route path="/new" element={<RequireAuth> <CreateQuestion/> </RequireAuth>}/>
        <Route path="/register" element={<Register/>}/>
        
    </Routes>)
}

export default Routing