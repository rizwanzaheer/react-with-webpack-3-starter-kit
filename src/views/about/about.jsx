import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class Root extends Component {
  componentWillMount() { }

  render() {
    return (
      <div>
        <Navbar />
        <section>
          <h1> About Component view </h1>
        </section>
        <Footer />
      </div>
    );
  }
}
