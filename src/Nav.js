import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Query from './components/pages/query';
import Help from './components/pages/help';
import View from './jbrowse/jbrowse';

  
function NAV() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route path='/' exact component={Home} />
        <Route path='/jbrowse/jbrowse' exact component={View} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/query' component={Query} />
        <Route path='/help' component={Help} />
        {/* <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
  );
}
  
export default NAV;