import React from 'react';
import styled from 'styled-components';
import Mobile from '../../../assets/img/icones/Mobile';
import Appstore from '../../../assets/img/icones/Appstore';
import { Link } from 'react-router-dom';
import ImgFesta from '../../../assets/home/festa/Party';
import Logo from '../../../assets/img/logo/Logo';
import Appstores from '../../../assets/img/icones/Appstore';
import styles from './styles.css';

export default function Home(){
    return (
        <Section className='container'>
            <Trapezio className="Trapezio">
                <Apresentacao className="apresentacao">
                    <Form method="post">
                        <H1>TRANSite com <br/>Segurança!</H1>
                        <P>Descubra ou indique os locais mais seguros para LGBT+</P>
                        <P><strong>Baixe gratuitamente</strong><br/>ou Cadastre-se aqui</P>
                        <Nome type="text" placeholder="  NOME"/>
                        <Nome type="email" placeholder="  E-MAIL"/>
                        <Nome type="password" placeholder="  SENHA"/>
                        <Nome type="password" placeholder="  CONFIRMAR SENHA"/>
                        <Cadastre type="submit">CADASTRE</Cadastre>
                    </Form>
                    <Figure>
                        <Mobile />
                        <Div>
                            <Appstore />
                        </Div>
                    </Figure>
                </Apresentacao>
            </Trapezio>
            <Apresentacao2>
                <Seguranca>
                    <H2>Segurança</H2>
                    <P2> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P2>
                </Seguranca>
                <Comunidade>
                    <H2>Comunidade</H2>
                    <P2> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P2>
                </Comunidade>
                <TempoReal>
                    <H2>Tempo real</H2>
                    <P2> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P2>
                </TempoReal>
                <Beneficios>
                    <H2>Benefícios</H2>
                    <P2> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P2>
                </Beneficios>
            </Apresentacao2>
            <ImgFesta />
            <Apresentacao3>
                <Div2>
                    <Logo />
                    <Appstores />
                </Div2>
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

const Form = styled.form`
    width: 50%;
    height: auto;
`;

const H1 = styled.h1`
    color: white;
    font-size: 48px;  
`;

const P = styled.p`
    color: white;
    font-size: 31px;
`;

const Nome = styled.input`
    background: black;
    border-radius: 100px;
    width: 350px;
    padding: 5px 60px 10px 15px ;
    color: white;
    margin-top: 30px;
`;

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    height: 1000px ;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between ;
    align-items: center;
    height: 70px ;
`;

const Cadastre = styled.button`
    background-color: #313536;
    height: 30px;
    width: 370px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: white;
    border: 1px solid white;
    text-decoration: none;
    :hover{
        background-color: #505050;
    }
`;

const Apresentacao2 = styled.section`
    width: 100%;
    height: 700px;
    display: grid;
    grid-template-areas:"seguranca comunidade"
                        "temporeal beneficios";
`;


const H2 = styled.h2`

`;

const P2 = styled.p`
    width: 90%;
`;

const Seguranca = styled.section`
    grid-area: seguranca;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    :hover{
        box-shadow: 0px 0px 20px black ;
    }
`;

const Comunidade = styled.section`
    grid-area: comunidade;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    :hover{
        box-shadow: 0px 0px 20px black ;
    }
`;

const Beneficios = styled.section`
    grid-area: beneficios;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    :hover{
        box-shadow: 0px 0px 20px black ;
    }
`;

const TempoReal = styled.section`
    grid-area: temporeal;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    :hover{
        box-shadow: 0px 0px 20px black ;
    }
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