import React from 'react'
import {useState,useEffect} from 'react'
import instance from '../axios';
import './Profile.css'

const Profile = () => {
  
   const[credentials,setCredentials]=useState([]);
   const token=localStorage.getItem('token');
   const getCredentials=async()=>{
       try{
        const response=await instance.get("/profile",{
            headers:{'x-access-token':`${token}`}
        })
       setCredentials(response.data.user)
       }catch(error){
           console.log(error);
       }
       
   };
   useEffect(()=>{getCredentials()},[])

    
    return (
        
        <div className='profile__container'>
                <div className="card">

                    <div className="card__side">
                        <div className="card__cover">
                            <h2 className="card__heading">
                            <span className="card__heading-span">Profilom</span>
                            </h2>
                        </div>
                        <div className="card__details">
                            <ul className='data'>
                                <li>Felhasználónév:{credentials.name}</li>
                                <li>Email:{credentials.email}</li>
                                <li>Rövid leírás:{credentials.description}</li>
                                <li>Nem:{credentials.gender}</li>
                            </ul>
                        </div>
                    </div>

                    

                </div>
            
            {/* <div className="profile__outerContainer">
                <Avatar className='avatar' size='300'/>
                <form>
                    <div className="userDetails">
                        <div className="inputs">
                            <span className="details">Felhasználónév</span>
                            <p className='user-detail'> Ide jön majd a felhasználónév</p>
                        </div>
                        
                            <span className="details">Rövid leírás</span>
                            <p className='user-detail'> Ide jön majd a leírásssssssssssssss</p>
                        
                       
                        <div className="inputs">
                            <span className="details">Szak</span>
                            <select name="faculty" id="faculty">
                                {faculty.map(fac =>(
                                   <option key={fac.name} value={fac.name}>{fac.name}</option> 
                                ))}
                            </select>
                        </div>
                    </div>
                <div className="button">
                    <input type="submit" value='Mentés' />
                </div>
                </form>
            </div> */}
            
        </div>
    )
}

export default Profile
