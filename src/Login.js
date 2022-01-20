import React,{useEffect,useState} from 'react'
import Profile from './Components/Profile'
import './Login.css'
import { Redirect, Router, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';

const onLoginClick=(e)=>{
    console.log("Login gombra kattint");
}

const Login = () => {
    

const[email,setEmail]=useState("");
const [password,setPassword]=useState("");  

const loginClick=()=>{
const opts={
    method:'OPTIONS',
    mode:'cors',
    headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":""
    }
    // body:JSON.stringify({
    //     "username":email,
    //     "password":password
    // })
}

    fetch('http://127.0.0.1:5000/login',opts)
    .then(resp=>{
        if(resp.status===200) {
            //window.location.href="http://127.0.0.1:5000/question"
            return console.log('sikeres bejelentkezes');
        }
        else alert("Error");
    })
    .then()
    .catch(error=>console.error("Error",error))
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
                        <input type="button" onClick={loginClick} value='Bejelentkezés' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
