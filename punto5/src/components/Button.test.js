// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('El botón muestra el texto inicial y cambia al hacer clic', () => {
  // Renderizamos el componente
  const { getByText } = render(<Button/>);

  // Verificamos que el texto inicial es "Hacer clic aquí"
  const button = getByText('Hacer clic aquí');
  expect(button).toBeInTheDocument(); 

  // Simulamos un clic en el botón
  fireEvent.click(button);

  // Verificamos que el texto cambió a "¡Gracias por hacer clic!"
  const nuevoTexto = getByText('¡Gracias por hacer clic!');
  expect(nuevoTexto).toBeInTheDocument();
});
