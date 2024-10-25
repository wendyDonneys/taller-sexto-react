import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Aquí están las señales de tráfico que llevan a las páginas */}
        <Link to="/inicio">Inicio</Link> | 
        <Link to="/sobre">Sobre</Link>
      </nav>
      
      {/* Aquí están los caminos que te llevan a cada página */}
      <Route path="/inicio" component={Inicio} />
      <Route path="/sobre" component={Sobre} />
    </BrowserRouter>
  );
}

function Inicio() {
  return <h1>Bienvenido a la página de inicio</h1>;
}

function Sobre() {
  return <h1>Acerca de nosotros</h1>;
}

export default App;

