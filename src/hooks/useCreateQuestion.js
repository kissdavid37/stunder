import React from 'react';
import { useState,useEffect } from 'react';

export default function useCreateQuestion(){
    const[showWindow,setShowWindow]=useState(false)

    const handleCreateQuestion=(e)=>{
        e.preventDefault()
        setShowWindow(true)
    }
    
    useEffect(()=>{
        document.addEventListener('click',handleCreateQuestion)

        return document.removeEventListener('create')
    })

}