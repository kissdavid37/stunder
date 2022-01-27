import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Routing from './Router';
import {useNavigate} from 'react-router-dom';

function App() {
 const token =localStorage.getItem('token');
 const history=useNavigate();
 
 if (token==null){
   history('/',{replace:true});
 }
 if(window.location.href.endsWith('/register')){
   return(<Routing/>)
 }
  return (
    <div className="App">
          <Header/>
          <Routing/>

    </div>
  );
 
}

export default App;


