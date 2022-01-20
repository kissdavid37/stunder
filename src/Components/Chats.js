import React from 'react';  
import './Chats.css';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className='chats'>
                <Chat
                    name="ellen"
                    message="Hello,Whazupp!"
                    timestamp="40 seconds ago"
                    profilePic="..."
                />

                <Chat
                    name="Sarah"
                    message="Hello mizu"
                    timestamp="55 seconds ago"
                    profilePic="..."
                />
                <Chat
                    name="Sandra"
                    message="Hello,Whazupp!"
                    timestamp="35 seconds ago"
                    profilePic="..."
                />
            
        </div>
    )
}

export default Chats
