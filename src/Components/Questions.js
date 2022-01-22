import React,{useEffect, useState} from 'react'
import Switch from '@material-ui/core/Switch';
import { RadioGroup } from '@material-ui/core'
import './Questions.css'
import instance from '../axios';



const Questions = () => {
    const [questions,setQuestions]=useState([]);

    const getQuestion = async () => {
  try {
      const token=localStorage.getItem('token');
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
                    // <div key={tantargy.question} className='question__state'>
                    //     <Switch className={tantargy.question +'1'}  checked={tantargy.checked}  color='primary'/>
                    //     <p className='Question'>{tantargy.question}</p>
                    //     <Switch className={tantargy.question +'2'}  checked={tantargy.checked}  color='secondary'/>
                    // </div>
                    <div key={question.id} className='question__state'>
                        <Switch  checked={question.ask}  color='primary'/>
                        <p className='Question'>{question.text}</p>
                        <Switch checked={question.help}  color='secondary'/>
                    </div>)
})}
            </div>
        </div>
    )
}

export default Questions
