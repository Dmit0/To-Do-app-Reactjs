import React from 'react';
import Switches from './mui/switch.js.js'
import Button from '@material-ui/core/Button';







export  function Task(props) {
 const classes=[];
 if(props.todo.complete){
   classes.push('done');
 }
  return (

    <div className={'taskstyle'}> 
      <div>
          <Switches 
            id={props.todo.id} 
            complete={props.todo.complete} 
            onClick={props.ontoggle}
          />
          <span className={classes} >
            {props.todo.title}
          </span>
         
          
      </div>
       <Button color="primary" onClick={()=>{props.onDelete(props.todo.id)}}>Delete</Button>
    </div>
    
  );
}