import React, { useContext, useState } from 'react';
import {Contextp} from './TodoContext';

const Form=()=>{

    const [name, setname]=useState("");
    const [job, setjob]=useState("");

    const [todo, settodo]=useContext(Contextp);

    const handlename=(e)=>{
        setname(e.target.value);
    }
    
    const handlejob=(e)=>{
        setjob(e.target.value);
    }

    
    const handlesubmit = (e) => {
        e.preventDefault();
        settodo((PrevTodo) => [...PrevTodo, { fullname: name, fulljob: job }]);
        
      };

    return(

        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" name="name" value={name} onChange={handlename} />
                <input type="text" name="job"  value={job} onChange={handlejob} />
                <input type="submit" name="add todo" />
            </form>
        </div>
    );
}

export default Form;