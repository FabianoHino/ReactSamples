import React, { useState } from 'react';

function AreasCard (props){
    /*const [title, setTitle] = useState(props.title);

    function testeClick (){
        setTitle("Bye world")
        props.responde({
            teste:"respondido!"
        })
    }
    
    <div>
            <div className="areasCard__label">{props.label}</div>
            <div className="areasCard__date">{props.date}</div>
            <div className="areasCard__dateFrom">{props.dateFrom}</div>
            <div className="areasCard__dateTo">{props.dateTo}</div>
        </div>
    
    */
   
    const loadAreaHandler = (event) =>{
        console.log(event)
    }

    return (
        <div>
            <div className="areasCard__label" onClick={loadAreaHandler}>{props.label}</div>

        </div>
    );
}

export default AreasCard;