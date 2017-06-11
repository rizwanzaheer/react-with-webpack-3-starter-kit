import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class NotFound extends Component {
  componentWillMount() { }

  render() {
    return (
      <div>
        <Navbar />
        <section>
          <h1> NotFound </h1>
        </section>
        <Footer />
      </div>
    );
  }
}
