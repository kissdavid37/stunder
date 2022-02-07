import React from 'react';
import {useEffect,useState} from 'react';
import instance from '../axios';
import "./CreateQuestion.css";
import Header from './Header';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';



const CreateQuestion = () => {
    const[text,setText]=useState('');
   // const token=localStorage.getItem('token');
    const AddQuestionAction=async(text)=>{
        try{
           const response=await instance.post("/question",{
            text:text},
            {headers: { 'x-access-token': `${window.localStorage.getItem('token')}`}
              
           });
           setText(response.data.text);
        }catch(error){
            alert(`Valami hiba történt!Próbáld újra`);
            console.log(error);
        }
    }



const AddQuestion=async()=>{
    AddQuestionAction(text);

}

  return (
        <div className='page_container'>
                <Header />
                <div className='form_container'>
                    <div className='question_form'>
                        <header className='text_container'>
                            <h2 className='h2_add'>Tantárgy hozzáadása</h2>
                            <p className='words'>Add hozzá a tárgyat amiből segítséget szeretnél kérni!</p>
                        </header>
                        <div className='add_questionForm'>
                            <div className='input_section'>
                                <input className='question_input' type='text' value={text||''} placeholder='Tantárgy neve' autoComplete='off' onChange={(e)=>setText(e.target.value)}/>
                                    <button className='animated_button' onClick={AddQuestion}><DoneIcon/></button>

                            </div>
                            
                            
                        </div>
                        <div className='shadow1'></div>
                        <div className='shadow2'></div>
                        
                    </div>

                    
                    
                </div>
        </div>)
};

export default CreateQuestion;
