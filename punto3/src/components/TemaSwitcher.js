
import React, { useContext } from 'react';
import { TemaContext } from './TemaContext';
import './TemaSwitcher.css'; // Import Styles, previously defined.

function TemaSwitcher() {
const { tema, toggleTema } = useContext(TemaContext); // define Context input

// define functions to the container // 
return (
    <div className={`tema-container ${tema}`}>
    <h1 className="texto-tema">
        Tema actual: {tema === 'claro' ? 'oscuro' : ' oscuro'}
    </h1>
    <button className="boton" onClick={toggleTema}>
        Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}
    </button>
    </div>
);
}

export default TemaSwitcher;