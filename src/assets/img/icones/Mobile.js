import React from 'react';
import styled from 'styled-components';
import Mobilesoren from './Mobilesoren.png'

export default function Mobile(){
    return(
        <Figure>
            <Img src={Mobilesoren} width="468px" height="850px" alt="Imagem da tela do aplicativo"/>
        </Figure>
    )
}

const Figure = styled.figure`
    width:100%;
    height:100%;
`;

const Img = styled.img`
    box-shadow: 0px 0px 80px blueviolet;
    border-radius: 67px;
`;