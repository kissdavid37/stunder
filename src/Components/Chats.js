import React,{useState,useEffect} from 'react';  
import './Chats.css';
import Chat from './Chat';
import {ChatEngine} from 'react-chat-engine'
import DirectMessaging from './DirectMessaging';


 
 const Chats = () => {
   return (
    //  <ChatEngine
    //     userName='kissdavid37'
    //     projectID='a6603778-028c-4652-9a96-adef96e3e8cd'
    //     userSecret='davidka'
    //  />
    <DirectMessaging/>
   )
 }
 
 export default Chats  

