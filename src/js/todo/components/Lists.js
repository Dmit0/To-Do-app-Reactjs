import React from 'react';
import Addlistbtn from './add_list_btn'
import NewList from './NewList'

export default function Lists({items,colors}){

    return(
        <div className="Application__sidebar">
         <ul className="sedebar__menu">
                    <li className="menu__li li_active">
                        <i className="icon  icon-home-outline"></i>
                        <span className="menu__text">Все задачи</span> 
                    </li>
            </ul>
        <NewList items={items}/>
        <Addlistbtn colors={colors}/>
        </div>
    )
}