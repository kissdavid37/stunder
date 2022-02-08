import React from 'react'
import {useState,useEffect} from 'react'
import Avatar from 'react-avatar';
import './Login.css'
import axios from 'axios';
import instance from '../axios';
import {useNavigate} from 'react-router-dom';
import { AxiosResponse,AxiosError } from 'axios';

const registerAction=async (name,email,pass,descript,gender)=>{
    try{
        const register=await instance.post('/register',{
            name:name,
            email:email,
            password:pass,
            gender:gender,
            description:descript
        });
        alert(`Sikeresen regisztráció a következő felhasználónévvel:${name}.\n Kérlek jelentkezz be!`);
        console.log(register);
        return register.data.register
    }catch(error){
        alert(`Valami hiba történt!Próbáld újra`);
        console.log(error);
    }
};



const Register = () => {
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("");
    const[description,setDescription]=useState("");
    
    const history=useNavigate();
    const createUser=async()=>{
        registerAction(username,email,password,gender,description);
        history('/',{replace:true})
    }
    
    const[confirmPassword,setConfirmPassword]=useState("");

    // const [profilepic,SetProfilepPic]=useState([
    //     {
    //         img:'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3'
    //     }
    // ]);
    
    return (
        
        <div className='login__outercontainer'>
            <div className="login__container">
               <form className='loginForm '>
                    <div className="userDetails">
                        <h1 className="log">Stunder</h1>
                        <div className="inputs">
                            <span className="details">Felhasználónév</span>
                            <input className='userinputs' type="text" placeholder='Felhasználónév' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div className="inputs">
                            <span className="details">E-Mail</span>
                            <input className='userinputs' type="email" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="inputs">
                            <span className="details">Jelszó</span>
                            <input className='userinputs' type="password" placeholder='Jelszó' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="inputs">
                            <span className="details">Nem</span>
                            <input className='userinputs' type="text" placeholder='Nem' value={gender} onChange={(e)=>setGender(e.target.value)}/>
                        </div>
                        <div className="inputs">
                            <span className="details">Rövid leírás</span>
                            <input className='userinputs' type="text" placeholder='Rövid leírás' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <p onClick={()=>history('/',{replace:true})}>Már van fiókom.</p>
                    </div>
                    <div className="button">
                        {/* <Link className="button" to="/question" > */}
                        <input type="button" onClick={createUser} value='Regisztrálok' />
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
