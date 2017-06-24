import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../views';
import About from '../views/about/about';
import ContactUs from '../views/contactus/contactus';
import NotFound from '../views/notfound/notfound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const history = createBrowserHistory();

export default class CustomRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
