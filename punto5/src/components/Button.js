// Import react, and define functions,return and export default of Button.js 
import React, { useState } from 'react';

function Button () {
  const [texto, setTexto] = useState('Hacer clic aquí');

  return (
    <button onClick={() => setTexto('¡Gracias por hacer clic!')}>
      {texto}
    </button>
  );
};

export default Button;
