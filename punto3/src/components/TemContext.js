// define useState It's a hook that allows us to add and manage state in functional components//
import React, { createContext, useState } from 'react'; 
export const TemaContext = createContext();

//We set the theme to light//
export const TemaProvider = ({ children }) => {
const [tema, setTema] = useState('claro');

// define functions to the container // 
const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
};

//// define functions to the return // 
return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
    {children}
    </TemaContext.Provider>
);
};