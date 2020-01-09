import React from 'react';
import styled from 'styled-components';

export default function Sobre(){
    return(
        <Section>
            <Trapezio>
                <Apresentacao>

                </Apresentacao>
            </Trapezio>
                <Apresentacao2>

                </Apresentacao2>
            <Apresentacao3>

            </Apresentacao3>
        </Section>
    )
}

const Section = styled.section`
    width: 100%;
    height: 3100px;
    margin: 0 auto;
    font-family: 'Biryani', sans-serif;
    text-align: justify;
`;

const Trapezio = styled.div`
    background-color: black;
    height: 1400px;
    display: flex;
    justify-content: center;
    border-style: solid;
    border-color: black black white black;
    border-width: 10px 50px 60px;
    
`;

const Apresentacao = styled.section`
    height: 100%;
    width: 80%;
    display: flex;
`;





const Apresentacao2 = styled.section`
    width: 100%;
    height: 700px;
    display: grid;
    grid-template-areas:"seguranca comunidade"
                        "temporeal beneficios";
`;


const Apresentacao3 = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
`;