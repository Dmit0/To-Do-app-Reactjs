import React from 'react';
import {DenseAppBar,FormInput} from './js/mui/appbar.js.js';
import {TodoList} from './js/Todolist.js.js';
import './index.css';

export  function App(){
  const [todos,setTodos]=React.useState([])
function toggletodo(id){
  setTodos(
    todos.map(todo=>{
      if(todo.id===id){
        todo.complete=!todo.complete
      }
      return todo;
    })
  )
}
function addTodo(title){
  setTodos(todos.concat([{
  title:title ,
  id: Date.now(),
  complete:false
  }]))
}
function handledelete(id){
  setTodos(
    todos.filter(todo=>todo.id!==id)
  )
}
      return(
      <div>
          <DenseAppBar />
          <div className={"Form"} >     
              <FormInput onCreate={addTodo} /> 
              {todos.length ? 
              (<TodoList todos={todos} onChange={toggletodo} onDelete={handledelete}/>)
              :(<p>no todos</p>)
              }
          </div>
         
      </div>
      );
}

