// define functions Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('El botón muestra el texto inicial y cambia al hacer clic', () => {
  // We render the component//
  const { getByText } = render(<Button/>);

  //check that the initial text is 'Click here'//
  const button = getByText('Hacer clic aquí');
  expect(button).toBeInTheDocument(); 

  // simulate a click on the button//
  fireEvent.click(button);

  //verify that the text changed to 'Thank you for clicking!'//
  const nuevoTexto = getByText('¡Gracias por hacer clic!');
  expect(nuevoTexto).toBeInTheDocument();
});
