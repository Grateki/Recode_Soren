import React from 'react';
import styled from 'styled-components';
import Logotipo from '../assets/img/logo/Logo';
import { Link } from 'react-router-dom';

export default function Cabecalho(){
    return (
        <Header>
            <Links to="/"><Logotipo/></Links>
            <Navegacao>
                <UL>
                    <Link1 to="/locais">LOCAIS</Link1>
                    <Link1 to="/eventos">EVENTOS</Link1>
                    <Link1 to="#">PREMIUM</Link1>
                    <Link3 to="#">LOGIN</Link3>
                    <Link2 to="#">CADASTRO</Link2>
                </UL>
            </Navegacao>
        </Header>
    )
}

const Header = styled.header`
    background-color: black;
    width: 100%;
    height:200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Links = styled(Link)`
    text-decoration: none;
`;

const Navegacao = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-family: 'Biryani', sans-serif;

`;

const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
    width: 80%;
    align-items: center;
    font-size: 18px;
    color: white;
`
const Link2 = styled(Link)`
    text-decoration: none;
    color: white;
    background: blueviolet;
    padding: 10px;
    margin-right: 50px;
    border-radius: 10px;
`;

const Link1 = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px;
    :hover{
        background: white;
        color: black;
        transition: 0.5s;
        font-weight: bold;
        border-radius: 10px;
    }
`;

const Link3 = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px;
    margin-right: -70px;
    :hover{
        background: white;
        color: black;
        transition: 0.5s;
        font-weight: bold;
        border-radius: 10px;
    }
`;
