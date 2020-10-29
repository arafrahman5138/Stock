import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Modules from './components/pages/Modules';
import ModuleTest from './components/pages/ModuleTest';
import Help from './components/pages/Help';
import SignUp from './components/pages/SignUp';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/modules' component={Modules} />
                    <Route path='/help' component={Help} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/mod_test' component={ModuleTest} />
                </Switch>
            </Router>
        </>
    );
}

export default App;