import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/about" component={About}/>
        <Route path="/contactme" component={ContactMe}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;