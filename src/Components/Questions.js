import React,{useEffect, useState} from 'react'
import './Questions.css'
import instance from '../axios';
import SwipeButtons from './SwipeButtons'
import useAuth from "../Contexts/authContext";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';






const Questions = () => {
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

  
    const askOnSubject=async(text,url)=>{
      try{
        // e.preventDefault();
       const response=await instance.get(`/${url}/${text}`,
         {mode:'cors', headers: { 'x-access-token': `${token}`,"Access-Control-Allow-Headers": "*",
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "*" }
        });
        if(response.status!==201 & response.status!==409 &response.status!==500){
          console.log("itt lesz a chat");
          await axios.put("https://api.chatengine.io/chats/",{"usernames":[response.data.only_helper],"title": `${text}`,"is_direct_chat": "False"},
          {headers:{"Project-ID":`${process.env.REACT_APP_PROJECT_ID}`,"User-Name":response.data.username,"User-Secret":`${window.localStorage.getItem('password')}`}})
        }

      }catch(error){
        console.log(error )
      }
    }
    return (
        <div className='questions__div'>
            <div className="questions__offer">
                <p className='questions__need'>Keres</p>
                <p className='questions__need'>Segít</p>
            </div>
            <div className="question__container">
                {subjects.map(subject=>{
                    return(
                    <div key={subject.text} className='question__state'>
                        <IconButton  className='add_to_asker' onClick={()=>askOnSubject(subject.text,'ask')}>
                              <AddIcon fontSize='small' />
                        </IconButton>
                        <p className='Question'>{subject.text}</p>
                        <IconButton  className='add_to_asker' onClick={()=>askOnSubject(subject.text,'help')}>
                              <AddIcon fontSize='small' />
                        </IconButton>
                    </div>)
})}
      <SwipeButtons/>
    
            </div>
            
           
            
            
        </div>

    )
}

export default Questions
