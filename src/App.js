import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import Navbar from './pages/home/home-components/Navbar'

//pages
import Home from './pages/home/Home';
import Modules from './pages/modules/Modules';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Module1 from './pages/modules/module-pages/Module_1/Module1';
import Mod1Page1 from './pages/modules/module-pages/Module_1/Mod1Page1';
import Mod1Page2 from './pages/modules/module-pages/Module_1/Mod1Page2';
import Mod1Page3 from './pages/modules/module-pages/Module_1/Mod1Page3';
import Mod1Page4 from './pages/modules/module-pages/Module_1/Mod1Page4';
import Mod1Page5 from './pages/modules/module-pages/Module_1/Mod1Page5';
import Mod1Page6 from './pages/modules/module-pages/Module_1/Mod1Page6';
import summary1 from './pages/modules/module-pages/summary1';
import Module2 from './pages/modules/module-pages/Module2';
import Mod2Page2 from './pages/modules/module-pages/Mod2Page2';
import Mod2Page3 from './pages/modules/module-pages/Mod2Page3';
import Mod2Page4 from './pages/modules/module-pages/Mod2Page4';
import Mod2Page5 from './pages/modules/module-pages/Mod2Page5';
import Summary2 from './pages/modules/module-pages/Summary2';
import Module3 from './pages/modules/module-pages/Module3';
import ModuleTest from './pages/modules/module-pages/ModuleTest';
import Quiz1 from './pages/modules/module-pages/Quiz1';
import Quiz2 from './pages/modules/module-pages/Quiz2';


function App() {
    return (
        <>
          <Router>
            <div>
              <ScrollToTop />
              <Navbar />
              <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/modules' component={Modules}/>
                    <Route path='/help' component={Help} />
                    <Route path='/profile' component={Profile} />

                    <Route path='/module-1' component={Module1} />
                    <Route path='/page-1' component={Mod1Page1} />
                    <Route path="/page-2" component={Mod1Page2} />
                    <Route path="/page-3" component={Mod1Page3} />
                    <Route path="/page-4" component={Mod1Page4} />
                    <Route path="/page-5" component={Mod1Page5} />
                    <Route path="/page-6" component={Mod1Page6} />
                    <Route path="/page-7" component={summary1} />
                    <Route path='/module-2' component={Module2} />
                    <Route path='/2page-2' component={Mod2Page2} />
                    <Route path='/2page-3' component={Mod2Page3} />
                    <Route path='/2page-4' component={Mod2Page4} />
                    <Route path='/2page-5' component={Mod2Page5} />
                    <Route path='/2page-6' component={Summary2} />
                    <Route path='/module-3' component={Module3} />
                    <Route path='/mod_test' component={ModuleTest} />
                    <Route path='/Quiz1' component={Quiz1} />
                    <Route path='/Quiz2' component={Quiz2} />

              </Switch>
            </div>
          </Router>
        </>
    );
}

export default App;