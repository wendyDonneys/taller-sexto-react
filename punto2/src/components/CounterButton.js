import React, { useState } from "react";
import './CounterButton.css'

const CounterButton = ({label}) => {
const [count,setCount] = useState(0); 

const handleClick = () => {
    setCount(prevCount => prevCount +1); 
    alert ('boton cliclado! Contador: $ {count + 1}'); 
}; 

const resetContador = () => {
    setContador(0);
};

return (
    <div className="counter-button">
        <button onClick={handleClick}>
            {label}
        </button>
        <p className ="Counter" >Contador. {count} </p>
    </div>

);
}; 

export default CounterButton; 
