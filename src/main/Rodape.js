import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Rodape(){
    return (
        <Footer>
            <InformacoesFooter>
                <Circulos>
                    <Div1></Div1>
                    <Div2></Div2>
                    <Div3></Div3>
                </Circulos>
                <NavFooter>
                    <Ul>
                        <Link to="/sobre">Sobre</Link>
                        <Li to="#">Informação</Li>
                        <Li>Contato</Li>
                    </Ul>
                </NavFooter>
            </InformacoesFooter>
            <P>Copyright © All rights reserved</P>
        </Footer>
    )
}

const Footer = styled.footer`
    background-color: black;
    color: white;
    width: 100%;
    height: 152px;
`;

const InformacoesFooter = styled.section`
    border-bottom: 1px solid white;
    width: 100%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Circulos = styled.section`
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    width: 150px;
`;

const Div1 = styled.div`
    background: #C4C4C4;
    width: 27px;
    height: 27px;
    border-radius: 50%;
`;

const Div2 = styled.div`
    background: #C4C4C4;
    width: 27px;
    height: 27px;
    border-radius: 50%;
`;

const Div3 = styled.div`
    background: #C4C4C4;
    width: 27px;
    height: 27px;
    border-radius: 50%;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin-right: 50px;
    height: 50px;
    width: 300px;
    font-family: Biryani, sans-serif;

`;

const NavFooter = styled.nav`
    display: flex;
`;

const Li = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px;
`;

 const P = styled.p`
    color: #fff;
    text-align: center;
 `;