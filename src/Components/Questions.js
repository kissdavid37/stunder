import React,{useEffect, useState} from 'react'
import Switch from '@material-ui/core/Switch';
import { RadioGroup } from '@material-ui/core'
import './Questions.css'

const Questions = () => {

    const [questions,setQuestions]=useState([
       
    ]);
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/question',{
            method:'GET',
            headers:{
                'Content-Type':'applications/json'   
            }

        })
        .then(resp=>{
            if(resp.ok){
                console.log(resp);
                return resp.json()
            }
        })
        .then(data=>setQuestions(data))
    },[])

   
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
                        <Switch key={question.ask}  checked={question.ask}  color='primary'/>
                        <p className='Question'>{question.text}</p>
                        <Switch key={question.help} checked={question.help}  color='secondary'/>
                    </div>)
})}
            </div>
        </div>
    )
}

export default Questions
