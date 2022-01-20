import React from 'react';
import {useState,useEffect} from 'react';
import './ChatScreen.css';
import  Avatar  from '@material-ui/core/Avatar';

const ChatScreen = () => {
    const [input,setInput]=useState([

    ])
    
    const [messages,setMessages]=useState([
        {
            name:'Ellen',
            image:'...',
            message:'Hi......:heart'
        },
        {
            name:'Ellen',
            image:'...',
            message:'Hows it going'
        },
        {

            message:'Hows it going'
        }
    ]);

    const handleSend=e =>{
        e.preventDefault();
        setMessages([...messages,{message:input }]);
        setInput("");
    }
    
    return (
        <div className='chatScreen'>
            <h2>Chat screen</h2> 
            <p className='chatScreen__timestamp'>You matched with Ellen</p>
            {messages.map(message=>(
                message.name ? (
                    <div className='chatScreen__message'>
                     <Avatar className="chatScreen__image" alt={message.name} src={message.image}/>
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                    
                ):(
                    <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
                )
                
            ))}
            
                <form className='chatScreen__input'>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} className='chatScreen_inputField' placeholder='Type a message' type="text" />
                    <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
                </form>
            
        </div>
    );
}

export default ChatScreen
