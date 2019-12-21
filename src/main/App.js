import React from 'react';
import Cabecalho from './Cabecalho';
import styled from 'styled-components';
import Rodape from './Rodape';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles.css';

export default function App(){
  return (
    <BrowserRouter>
      <Section className="mainContent">
        <Cabecalho/>
          <Routes />
        <Rodape />
      </Section>
    </BrowserRouter>
    );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: -8px;
`;