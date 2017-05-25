
import css from './app.scss';
import React from "react";
import ReactDOM from "react-dom";
import Css from './app.scss';
const bootload = require('bootstrap-loader');
import Root from './root.js';

console.log("Welcome Rizwan in Webpack Dev Server!");

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);