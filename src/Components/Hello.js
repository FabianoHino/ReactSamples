import React, { useState } from 'react';

function Hello (props){
    const [title, setTitle] = useState(props.title);

    function testeClick (){
        setTitle("Bye world")
        props.responde({
            teste:"respondido!"
        })
    }

    return (
        <div>
            <p>{title}</p>
            <button onClick={testeClick}></button>
        </div>
    );
}

export default Hello;