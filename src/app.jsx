import React from 'react';
import ReactDOM from 'react-dom';

import Root from './views';

import css from './style/app.scss';


const bootload = require('bootstrap-loader');

ReactDOM.render(
  <Root />,
  document.getElementById('app'),
);
