import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../views';
import About from '../views/about/about';
import ContactUs from '../views/contactus/contactus';
import NotFound from '../views/notfound/notfound';


export default class CustomRoutes extends Component{
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}