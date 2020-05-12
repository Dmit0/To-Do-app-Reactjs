import React,{useState} from 'react';
import Icons from './icons'
import close from '../../../assets/img/close.svg'


export default function Addlistbtn({colors}){
    const [visibleform,setForm]=useState(false);
    const [colorSelect,setColorSelect]=useState(colors[0].id);
   function onToggle(){
       setForm(!visibleform)
   }
   function onSelect(id){
     setColorSelect(id);
   }
  
   
//console.log(colors.map(item=>item.name))
    return(
       <React.Fragment>
      
            <ul className={"add-btn"} >
                <li onClick={()=>onToggle()}>
                    <i>
                    <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </i>
                    <span>Добавить список</span>
                </li>
            </ul>
            {visibleform &&  
            <div className="add-btn__Addform">
            <img src={close}alt="close"className="add-btn__close-btn" onClick={()=>onToggle()}></img>
                <input className={'add-btn__input-list'} type="text" placeholder="Название списка">
                </input>
                <div className="add-btn__colors">
                    {colors.map(item=>(
                        
                        <Icons
                         id={item.id} 
                         onClick={()=>onSelect(item.id)} 
                         key={item.id} 
                         color={item} 
                         className={colorSelect===item.id && 'active'}    
                         />

                    ))}
                        
                    
                </div>
                <span className="button">Добавить</span>
            </div>
            }
           
            
        </React.Fragment>
   ) 
}