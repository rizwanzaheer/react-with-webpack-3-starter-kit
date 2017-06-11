import React from 'react';
import ReactDOM from 'react-dom';

import CustomRoutes from './config/routes';

import Root from './views';

import css from './style/app.scss';

const bootload = require('bootstrap-loader');

ReactDOM.render(
  <CustomRoutes />,
  document.getElementById('app'),
);
