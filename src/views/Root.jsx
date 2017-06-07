import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

export default class Root extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
        <Footer />
      </div>
    );
  }
}
