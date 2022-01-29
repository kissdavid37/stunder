import React,{useEffect,useState} from 'react'
import './Login.css'
import { Link } from '@material-ui/core';
import instance from '../axios';
import {useNavigate} from 'react-router-dom';
import useAuth from '../Contexts/authContext'



const Login = () => {
    const { setLoginToken } = useAuth();

     const history=useNavigate();

const[username,setEmail]=useState("");
const [password,setPassword]=useState("");


    const loginAction = async (username, pass) => {
        try {
            const token = await instance.post("/login",{}, {
                auth:{
                    username: username,
                    password: pass
                }
            });

            setLoginToken(token)
            return token.data.token;
        } catch (error) {
            console.log(error);
        }
    };



//const token=loginAction(email,password);
const authorize=async()=>{
  const token = await loginAction(username,password);
  if(username==""){
    alert('Felhasználónév megadása kötelező!');
  }
  if(password==""){
    alert('Jelszó megadása kötelező!');
  }
  else if(token==null){
    alert('Hibás felhasználónév vagy jelszó!');
  }
  else{
  window.localStorage.setItem('token',token);
  history('/question',{replace:true})
  }
  
  
  
}

const register=()=>{
   history('/register',{replace:true});
}


    return (
        <div className='login__outercontainer'>
            <div className="login__container">
               <form >
                    <div className="userDetails">
                        <h1 className="log">Stunder</h1>
                        <div className="inputs">
                            <span className="details">Felhasználónév</span>
                            <input type="text" placeholder='Felhasználónév' value={username} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="inputs">
                            <span className="details">Jelszó</span>
                            <input type="password" placeholder='Jelszó' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <p onClick={register}>Nincs fiókod? kattints ide.</p>
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
