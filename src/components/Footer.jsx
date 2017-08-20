import React, { Component } from 'react';
import footerStyle from '../components/footer.scss';

export default class Footer extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
        <footer>
          <p className={footerStyle.copyright}>© 2017 • <a href="https://www.facebook.com"> Rizwan </a></p>
        </footer>
      </div>
    );
  }
}
