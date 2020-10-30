import React from 'react';
import './App.css';
import Navbar from './pages/home/home-components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import Home from './pages/home/Home';
import Modules from './pages/modules/Modules';
import Help from './pages/Help';
import SignUp from './pages/SignUp';
import Module1 from './pages/modules/module-pages/Module1';
import Mod1Page1 from './pages/modules/module-pages/Mod1Page1';
import Module2 from './pages/modules/module-pages/Module2';
import Module3 from './pages/modules/module-pages/Module3';

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
