import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Locais from '../pages/SignUp/locais/Locais'
import Home from '../pages/SignUp/home/Home';
import Eventos from '../pages/SignUp/eventos/Sobre';
import Sobre from '../pages/SignUp/sobre/Sobre'


export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/locais" component={Locais} />
            <Route exact path="/eventos" component={Eventos} />
            <Route exact path="/sobre" component={Sobre} />
        </Switch>
        )
}

