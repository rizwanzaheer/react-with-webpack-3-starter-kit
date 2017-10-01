import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views';
import About from '../views/about/about';
import ContactUs from '../views/contactus/contactus';
import NotFound from '../views/notfound/notfound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomRoutes = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default CustomRoutes;
