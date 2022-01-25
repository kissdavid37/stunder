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

            <div className="profile__outerContainer">
                <Avatar className='avatar' size='300'/>
                <form>
                    <div className="userDetails">
                        <div className="inputs">
                            <span className="details">Felhasználónév</span>
                            <input type="text" placeholder='Felhasználónév'/>
                        </div>
                        <div className="inputs">
                            <span className="details">Jelszó</span>
                            <input type="text" placeholder='Jelszó'/>
                        </div>
                        <div className="inputs">
                            <span className="details">Jelszó megerősítés</span>
                            <input type="text" placeholder='Jelszó megerősítés'/>
                        </div>
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
            </div>
            
        </div>
    )
}

export default Profile
