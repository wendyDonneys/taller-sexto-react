import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* define Links on this pages*/}
        <Link to="/inicio">Inicio</Link> | 
        <Link to="/sobre">Sobre</Link>
      </nav>
      
      {/* define Links on this pages*/}
      <Route path="/inicio" component={Inicio} />
      <Route path="/sobre" component={Sobre} />
    </BrowserRouter>
  );
}

function Inicio() {
  return <h1>Bienvenido a la página de inicio</h1>;
}

function Sobre() {
  return <h1 className="titulo animacion-color">Acerca de nosotros</h1>;
}
function App() {
  return (
    <Router>
      <div>
        <nav className="navegacion">
          <ul>
            <li>
              <Link to="/inicio" className="link">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre" className="link">Sobre</Link>
            </li>
          </ul>
        </nav>

        <div className="contenido">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

