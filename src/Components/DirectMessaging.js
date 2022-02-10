import React,{useState} from 'react';
import { ChatEngine,getOrCreateChat } from 'react-chat-engine';



const DirectMessaging = () => {
    const[username,setUsername]=useState('')

    function implementingDirectChat(credentials){
        getOrCreateChat(
            credentials,
            {is_direct_chat:true,usernames:[username]},
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
            userName='kissdavid37'
            
            userSecret={process.env.REACT_APP_USER_SECRET}
            projectID={process.env.REACT_APP_PROJECT_ID}
            displayNewChatInterface={(credentials) => displayChatInterface(credentials)}
            />
  )
}

export default DirectMessaging