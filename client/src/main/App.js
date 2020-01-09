import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import styled from 'styled-components';
import Rodape from './Rodape';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    axios.get('/postagens')
    .then(resultado => {
      console.log(resultado)
    });
  };
  render(){
    return (
      <BrowserRouter>
        <Section className="mainContent">
          <Cabecalho/>
            <Routes />
          <Rodape />
        </Section>
      </BrowserRouter>
    );
  };
};

export default App;


const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: -8px;
`