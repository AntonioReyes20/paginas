import React from 'react';
import './App.css';
import './Components/Estilos.css';
import NavBar from './Components/NavBar';
import Informacion from './Components/Informacion';
import {Container} from '@material-ui/core';
import Page from './Components/Page';
import Formulario from './Components/Formulario';

function App() {

const config = {
  systemName: 'Vida Fitness'
}

  return (
    <div className="App">

        <header className="header">
          <NavBar systemName={config.systemName}/>
        </header>

      <Container maxWidth={'xl'}>
        <nav className="Nav">
          <Page/>
        </nav>
      </Container>
	  
	  <Container maxWidth={'xl'}>
        <Informacion/>
      </Container>

      <Container maxWidth={'xl'}>
        <Formulario/>
      </Container>

    </div>
  );
};

export default App;
