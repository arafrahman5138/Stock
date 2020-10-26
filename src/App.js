import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import Home from './components/pages/Home';
import Modules from './components/pages/Modules';
import Help from './components/pages/Help';
import SignUp from './components/pages/SignUp';
import Module1 from './components/pages/module-pages/module-1';
import Mod1Page1 from './components/pages/module-pages/mod-1-pg-1';
import Module2 from './components/pages/module-pages/module-2';
import Module3 from './components/pages/module-pages/module-3';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/> 
          <Route path='/modules' component={Modules}/>
          <Route path='/help' component={Help}/>  
          <Route path='/sign-up' component={SignUp}/> 

          <Route path='/module-1' component={Module1}/> 
          <Route path='/page-1' component={Mod1Page1}/> 
          <Route path='/module-2' component={Module2}/>
          <Route path='/module-3' component={Module3}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
