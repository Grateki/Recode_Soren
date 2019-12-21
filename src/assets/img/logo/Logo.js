import React from 'react'
import Logo from './Logo.png';
import styled from 'styled-components';

export default function Logotipo(){
    return (
        <Figure>
            <Img src={Logo} alt="Logotipo Soren"/>
            <Figcaption>SOREN</Figcaption>
        </Figure>
    )
}

const Img = styled.img`
    width: 70px;
    height: 60px;
`;

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    color: white;
    margin-top: 37px;
    margin-left: 65px;
`;

const Figcaption = styled.figcaption`
    display: flex;
    flex-direction: column;
    font-family: Biryani;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
`;