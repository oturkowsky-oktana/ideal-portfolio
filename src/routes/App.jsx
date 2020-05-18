import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Home from '../pages/Home.jsx';
import Calculator from '../pages/Calculator.jsx';

export default class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/calculator" component={Calculator}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}