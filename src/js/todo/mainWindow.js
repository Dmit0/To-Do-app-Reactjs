import React from 'react';
import Lists from './components/Lists';
import DB from '../../assets/db.json';


export default function MainWindow(){
   //console.log(DB.colors)
    return(
        <div className="Application">
            <div className="Application__upBar">
                <span className="title">To Do list</span>
            </div>
                <Lists 
                colors={DB.colors}
               
                items={[{
                    color:'#42B883',
                    name:'покупки',
                    id:1
                },
                {
                    color:'#64C4ED',
                    name:'еда',
                    id:2
                },
                {
                    color:'#FFBBCC',
                    name:'фильмы',
                    id:3
                }]}
            />
            <div className="Application_TodoList"></div>
        </div>
       
    )
}