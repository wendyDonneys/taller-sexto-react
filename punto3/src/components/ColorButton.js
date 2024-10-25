import React, {useState} from "react"; 

const ColorButton = () => {
    const [color, setColor]= useState("blue");

    const handleClick = () => {
        setColor(color === "Black"? "White": "Gray");
    };

    return ( 
        <button
          onClick={handleClick}
          style={backgroundColor: color,color: "White"}}
          Change Color
        </button> 
    );
}; 

export default ColorButton; 