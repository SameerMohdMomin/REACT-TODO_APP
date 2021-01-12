import React, { createContext, useState } from 'react'

export const Contextp=createContext();

export const TodoContext = (props) =>{
    
    const[todo, settodo]=useState([
        {
            fullname:"sameer",
            fulljob:"full stact developer"
        }
    ]);


    return(

        <Contextp.Provider value={[ todo, settodo ]}>
            {props.children}
        </Contextp.Provider>

    );
    };

