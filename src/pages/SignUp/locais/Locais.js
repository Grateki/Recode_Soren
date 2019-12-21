import React from 'react';
import styled from 'styled-components';

export default function Local(){
    return(
        <Section>
            <API>
                <Input type="text" placeholder="Pesquise um local"/>
            </API>
        </Section>
    )
}

const Section = styled.section`
    background: red;
    width: 100%;
    height: 1500px;
`;

const API = styled.section`
    width: 100%;
    height: 700px;
    background: white;
`;

const Input = styled.input`

    margin: 10px;
    padding: 10px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px black;
`;