import React, { useContext } from 'react';
import {Contextp} from './TodoContext';

const Todo = () => {
    
    const[todo, settodo]=useContext(Contextp);

    return(
       <div>
           {todo.map(td => (
               <h2>{td.fullname} | {td.fulljob}</h2>
           ))}
       </div>

    );
}


export default Todo;