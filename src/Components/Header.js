import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link,useHistory, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const handleLogout=()=>{
    localStorage.clear();
    window.location.pathname="/";
};

function Header({backButton}) {
    const history=useNavigate();
    return (
        <div className='header'>
            {backButton ? (//ha belevan rakva a backbutton prop akkor a nyil,különben a profil ikon legyen ott
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon className='header__icon' fontSize='large' htmlColor='white'/>
                </IconButton>
            ):  (
                <Link to='/profile'>
                    <IconButton>
                        <PersonIcon className='header__icon' fontSize='large' htmlColor='white'/>
                    </IconButton>
                </Link>
            )}
            
            
            <Link to='/question'>
                <IconButton>
                <h2 className='appName'>Stunder</h2>
                </IconButton>
            </Link>
            <div>
                
            <IconButton onClick={handleLogout}>
            <InfoIcon  className='header__icon' fontSize='large' htmlColor='white'/>
            </IconButton>
            <Link to="/chats">
                <IconButton>
                <QuestionAnswerIcon className='header__icon' fontSize='large' htmlColor='white'/>
                </IconButton>
            </Link>
            </div>
        </div>
    )
}

export default Header
