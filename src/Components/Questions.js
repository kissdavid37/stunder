import React,{useEffect, useState} from 'react'
import Switch from '@material-ui/core/Switch';
import { RadioGroup } from '@material-ui/core'
import './Questions.css'
import instance from '../axios';
import SwipeButtons from './SwipeButtons'
import useAuth from "../Contexts/authContext";



const Questions = () => {
    const [questions,setQuestions]=useState([]);
   // const { token } = useAuth();
   const token=localStorage.getItem('token');
    const getQuestion = async () => {
  try {

    const response = await instance.get("/question", {
      headers: { 'x-access-token': `${token}` }
    });
    setQuestions(response.data.questions);
  } catch (error) {
    console.log(error);
  }
};

   
    useEffect(()=>{getQuestion()},[])

   
    return (
        <div className='questions__div'>
            <div className="questions__offer">
                <p className='questions__need'>Keres</p>
                <p className='questions__need'>Segít</p>
            </div>
            <div className="question__container">
                {questions.map(question=>{
                    return(
                    <div key={question.id} className='question__state'>
                        <Switch  checked={question.ask}  color='primary'/>
                        <p className='Question'>{question.text}</p>
                        <Switch checked={question.help}  color='secondary'/>
                    </div>)
})}
            </div>
            <SwipeButtons/>
        </div>

    )
}

export default Questions
