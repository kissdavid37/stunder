import React,{useState} from 'react';
import { ChatEngine,getOrCreateChat } from 'react-chat-engine';



const DirectMessaging = () => {
    const[username,setUsername]=useState('')

    function implementingDirectChat(credentials){
        getOrCreateChat(
            credentials,
            {is_direct_chat:false,usernames:[username]},
            ()=>setUsername('')
        )
    }

    const displayChatInterface=(credentials)=>{
        return (
            <div>
                <input
                    type="text"
                    placeholder='Find username'
                    value={username}
                  
                    onChange = {(e) => setUsername(e.target.value)}
                />

                <button onClick={() => implementingDirectChat(credentials)}>
                    Create Chat
                </button>
                

            </div>
        )
    }
  return (

    <ChatEngine
            height='100vh'
            userName={window.localStorage.getItem('username')}
            
           // userSecret={process.env.REACT_APP_USER_SECRET}
           userSecret={window.localStorage.getItem('password')}
            projectID={process.env.REACT_APP_PROJECT_ID}
            displayNewChatInterface={(credentials) => displayChatInterface(credentials)}
            />
  )
}

export default DirectMessaging