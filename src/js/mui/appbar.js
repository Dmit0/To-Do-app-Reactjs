import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
 },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
   flexGrow: 1,
 },
 rootInput: {
  '& > *': {
    width: '100%',
  },
},
}));

export function FormInput(props){
  
  const [value,setValue]=useState('');
  function submitHandler(event){
    event.preventDefault();
    if(value.trim()){
      props.onCreate(value)
      setValue('');

    }
    
  }
  return (
    <form className={"input"} noValidate autoComplete="off" onSubmit={submitHandler}>
      <TextField 
      className={'input'}
      id="standard-basic" 
      placeholder="Add todo"
      onChange={(event)=>setValue(event.target.value)} 
      value={value} 
      color='primary'
      
      />
    </form>
   
  );
}

export  function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            To do list
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

