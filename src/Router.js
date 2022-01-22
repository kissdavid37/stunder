import * as React from 'react';
import {Route,Routes} from 'react-router-dom';
import Questions from './Components/Questions';
import Login from './Login';



const questions=React.lazy(()=>import('./Components/Questions'));
const login=React.lazy(()=>import('./Login'));
const Routing=()=>{
    return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/question' element={<Questions />} />
        
    </Routes>)
}

export default Routing