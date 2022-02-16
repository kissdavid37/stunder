import React from 'react'
import {useState,useEffect} from 'react'
import Avatar from 'react-avatar';
import './Profile.css'

const Profile = () => {
    const [faculty,setFaculty]=useState([
       {
           name:'Programtervező informatika'
       },
       {
        name:'Mérnökinformatika'
       },
       {
        name:'Gazdaságinformatika'
       }
    ]);

    const [profilepic,SetProfilepPic]=useState([
        {
            img:'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3'
        }
    ]);
    
    return (
        
        <div className='profile__container'>
                <div class="card">

                    <div class="card__side">
                        <div class="card__cover">
                            <h2 class="card__heading">
                            <span class="card__heading-span">Profilom</span>
                            </h2>
                        </div>
                        <div class="card__details">
                            <ul className='data'>
                                <li>Felhasználónév:</li>
                                <li>Rövid leírás:</li>
                                <li>Szak:</li>
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
