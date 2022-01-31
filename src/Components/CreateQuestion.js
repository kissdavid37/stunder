import React from 'react';
import {useEffect,useState} from 'react';
import instance from '../axios';



const CreateQuestion = () => {
    const[question,setQuestion]=useState("");
    const token=localStorage.getItem('token');
    const AddQuestionAction=async(question)=>{
        try{
           const response=await instance.post("/question",{
            headers: { 'x-access-token': `${token}`,
            text:question
         }
            
           });
           setQuestion(response.data.question);
        }catch(error){
            alert(`Valami hiba történt!Próbáld újra`);
            console.log(error);
        }
    }



const AddQuestion=async()=>{
    AddQuestionAction(question);

}

  return <div className='background_container'>
      <h2 className='add'>Tantárgy hozzáadása</h2>
      <div className='input__container'>
          <input className='add__Question' type='text' value={''|question} onChange={(e)=>setQuestion(e.target.value)}/>
      </div>
      <button onClick={AddQuestion}>Hozzáad</button>
  </div>;
};

export default CreateQuestion;
