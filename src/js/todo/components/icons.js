import React from 'react';

export default function Icons({color,onClick,className}){ 
   
    return( 
    <i 
    className={`Badge Badge--${color.name} ${className}`} 
    onClick={onClick}>
    
    </i> ) 
}
    

  

