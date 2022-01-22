import React,{useEffect,useState} from 'react'
import './Login.css'
import { withRouter } from 'react-router';
import axios from 'axios';
import { Link } from '@material-ui/core';
import instance from './axios';
import {useNavigate} from 'react-router-dom';



const loginAction = async (username, pass) => {
  try {
    const token = await instance.post("/login",{}, {
     auth:{
      username: username,
      password: pass
     }
    });
    return token.data.token;
  } catch (error) {
    console.log(error);
  }
};



const Login = () => {

     const history=useNavigate();

const[email,setEmail]=useState("");
const [password,setPassword]=useState("");  

//const token=loginAction(email,password);
const authorize=async()=>{
  const token = await loginAction(email,password);
  window.localStorage.setItem('token',token);
  history('/question',{replace:true})
  
}


    return (
        <div className='login__outercontainer'>
            <div className="login__container">
               <form >
                    <div className="userDetails">
                        <h1 className="log">Stunder</h1>
                        <div className="inputs">
                            <span className="details">Felhasználónév</span>
                            <input type="text" placeholder='Felhasználónév' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="inputs">
                            <span className="details">Jelszó</span>
                            <input type="password" placeholder='Jelszó' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="button">
                        {/* <Link className="button" to="/question" > */}
                        <input type="button" onClick={authorize} value='Bejelentkezés' />
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
