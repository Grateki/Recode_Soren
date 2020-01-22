import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Locais from '../pages/login/locais/Locais'
import Sobre from '../pages/login/sobre/Sobre'


export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/locais" component={Locais} />
            <Route exact path="/sobre" component={Sobre} />
        </Switch>
        );
};

