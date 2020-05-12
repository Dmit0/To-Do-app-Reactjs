import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches(props) {
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        onClick={()=>props.onClick(props.id)}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    
  );
}