import React from 'react'
import {useState,useEffect} from 'react'
import Avatar from 'react-avatar';
import './Login.css'
import axios from 'axios';
import instance from '../axios';
import {useNavigate} from 'react-router-dom';


const createUser=async (user,password)=>{
    try{
        const token=localStorage.getItem('token');
        //console.log(token);
        const response=await instance.post("/register",{
            headers:{'x-access-token':`${token}`},
            create:{
                name:user,
                password:password
            }
           
        }); 
        console.log(response.request);
        return response.request;
    }catch(error){
        console.log(error);
    }
    
}



const Register = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    
    const history=useNavigate();
    const register=async()=>{
        
        history('/',{replace:true});

    }
    
    const[confirmPassword,setConfirmPassword]=useState("");

    // const createUser = async () => {
    //     try {
    //         const token=localStorage.getItem('token');
    //       const response = await instance.get("/create", {
    //         headers: { 'x-access-token': `${token}` }
    //       });
    //       setNewUser(response.data.newUser);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    


    // const [profilepic,SetProfilepPic]=useState([
    //     {
    //         img:'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3'
    //     }
    // ]);
    
    return (
        
        <div className='login__outercontainer'>
            <div className="login__container">
               <form >
                    <div className="userDetails">
                        <h1 className="log">Stunder</h1>
                        <div className="inputs">
                            <span className="details">Felhasználónév</span>
                            <input type="text" placeholder='Felhasználónév' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div className="inputs">
                            <span className="details">Jelszó</span>
                            <input type="password" placeholder='Jelszó' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="button">
                        {/* <Link className="button" to="/question" > */}
                        <input type="button" onClick={register} value='Regisztrálok' />
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
