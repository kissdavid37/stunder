import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import {useNavigate} from 'react-router-dom';

const SwipeButtons = () => {
    const history=useNavigate();
    const addNewQuestion=async()=>{
        history('/new',{replace:true})
    }
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton  onClick={addNewQuestion} className='swipeButtons__left'>
                <AddIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <RemoveIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__lightning'>    
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons

