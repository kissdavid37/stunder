import React,{useEffect, useState} from 'react'
import './Questions.css'
import instance from '../axios';
import SwipeButtons from './SwipeButtons'
import useAuth from "../Contexts/authContext";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';




const Questions = () => {
  //const {x,y,showMenu}=useRightClickMenu();
    const [subjects,setSubjects]=useState([]);
   // const { token } = useAuth();
   const token=localStorage.getItem('token');
    const getSubject = async () => {
  try {

    const response = await instance.get("/question", {
      headers: { 'x-access-token': `${token}` }
    });
    setSubjects(response.data.subjects);
  } catch (error) {
    console.log(error);
  }
};

   
    useEffect(()=>{getSubject()},[])

  
 

   
    return (
        <div className='questions__div'>
            <div className="questions__offer">
                <p className='questions__need'>Keres</p>
                <p className='questions__need'>Segít</p>
            </div>
            <div className="question__container">
                {subjects.map(subject=>{
                    return(
                    <div key={subject.id} className='question__state'>
                        <IconButton  className='add_to_asker'>
                              <AddIcon fontSize='small'/>
                        </IconButton>
                        <p className='Question'>{subject.text}</p>
                        <IconButton  className='add_to_asker'>
                              <AddIcon fontSize='small'/>
                        </IconButton>
                    </div>)
})}
      <SwipeButtons/>
    
            </div>
            
           
            
            
        </div>

    )
}

export default Questions
