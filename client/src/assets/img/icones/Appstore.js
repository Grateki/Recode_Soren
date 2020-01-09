import React from 'react';
import Appstore from './Appstore.png';
import Googleplay from './Googleplay.png';
import styled from 'styled-components';
export default function Appstores(){
    return (
        <Figure>
            <img src={Googleplay} alt="Instale seu aplicativo pelo Google play" width="200px" height="250px" />
            <Img src={Appstore} alt="Instale seu Aplicativo pela App Store" width="200px" height="65px" />
        </Figure>
    )
}

const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 350px;
    margin: 0 auto;
`;

const Img = styled.img`
    
`;

