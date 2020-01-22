import React from 'react';
import Logotipo from '../../../assets/img/logo/Logo.png';
import styles from './styles.css';

export default function Landing(){
    return(
        <section>
            <header className="header">
                <a href="/signup">
                    <figure className="figure">
                        <img className="logotipo" src={Logotipo} alt="logotipo do soren" width="50px" height="50px"/>
                        <figcaption className="textLogoSoren">Soren</figcaption>
                    </figure>
                </a>
                <div>
                    <input className="loginEmail" type="email" name="loginEmail" placeholder="Insira seu e-mail"/>
                    <input className="loginPassword" type="email" name="loginEmail" placeholder="Insira sua senha"/>
                </div>
            </header>

            <main className="principal">
                <section>
                    <div className="mainTitle">
                        <h1 id="titleLanding">TRANSite <br />com<br /> segurança.</h1>
                        <p id="paragraf"> Descubra ou indique locais <br/ >mais seguros para a<br />comunidade LGBTQI+!</p>
                    </div>
                </section>
                <div className="blocoForm">
                    <h1 className="titleForm">Crie sua conta</h1>
                    <form className="form" action="/users" method="post">
                        <span>Nome</span>
                        <input className="input" type="text" name="fullname" placeholder="  Nome completo" required/>
                        <span>Data de Nascimento</span>
                        <input className="input" type="date" name="birthday" required />
                        <span>E-mail</span>
                        <input className="input" type="email" name="email" placeholder="  Seu e-mail" required/>
                        <span>Sua senha</span>
                        <input className="input" type="password" name="password" placeholder="Sua senha" required/>
                        <span>Sua senha</span>
                        <input className="input" type="password" name="  password-conf" placeholder="Confirme sua senha" required/>
                        <p className="paragrafForm">Ao clicar em Cadastre-se, você concorda com nossos Termos,<br /> Política de Dados e Política de Cookie.Você pode receber <br />notificações por SMS e pode cancelar sua conta quando quiser.</p>
                        <input className="submit" type="submit" value="Cadastrar-se" />
                    </form>
                </div>
            </main>
            <footer className="footer">
                <nav>
                    <ul>
                        <a href="#">Sobre</a>
                        <a href="#">Informação</a>
                        <a href="#">Contato</a>
                    </ul>
                </nav>
            <p>Copyright © All rights reserved</p>
            </footer>
        </section>
    );
};
