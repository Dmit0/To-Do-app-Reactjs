import React from 'react';
import {Task} from './task.js';



export  function TodoList(props){
    return(
    <div>
    {props.todos.map(todo=>{
        return <Task 
        todo={todo} 
        key={todo.id}
        ontoggle={props.onChange}
        onDelete={props.onDelete}

        />
    })}
    </div>
    )
    
}