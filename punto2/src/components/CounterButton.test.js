import React from "react";
import {render,screen, fireEvent} from '@texting-library/React';
import CounterButton from "./CounterButton";

test ('incrementa el contador al hacer clic en el botón', () =>{
    window.alert = jest.fn ();

    render (<CounterButton label = "Click me"/>); 

    const buttonElement = screen.getByText ("Click me"); 
    
    expect (screen.getByText(/contador:0/i)). toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(screen.getByText(/contador:1/i)).toBeInTheDocument();
    
    expect(window.alert).toHaveBeenCalledWith("boton clicado! Contador: 1");
    
    fireEvent.click(buttonElement); 
    expect(screen.getByText(/contador:2/i)).toBeInTheDocument(); 
    
    expect(window.alert).toHaveBeenCalledWith('boton clicado! Contador: 2');
});