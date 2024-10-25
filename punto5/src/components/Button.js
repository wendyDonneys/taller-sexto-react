// Button.js
import React, { useState } from 'react';

const Button = () => {
  const [texto, setTexto] = useState('Hacer clic aquí');

  return (
    <button onClick={() => setTexto('¡Gracias por hacer clic!')}>
      {texto}
    </button>
  );
};

export default Button;
