import React from 'react';
import styled from 'styled-components';
import Mobilesoren from './Mobilesoren.png'

export default function Mobile(){
    return(
        <Figure>
            <Img src={Mobilesoren} width="100%" height="850px" alt="Imagem da tela do aplicativo"/>
        </Figure>
    )
};

const Figure = styled.figure`
    width:500px;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    box-shadow: 0px 0px 80px blueviolet;
    border-radius: 67px;
`;