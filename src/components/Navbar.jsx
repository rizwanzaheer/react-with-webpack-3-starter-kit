import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavStyle from '../components/navbar.scss';

export default class Navbar extends Component {
  render() {
    const { active } = NavStyle;
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <NavLink exact className="navbar-brand" to="/">
                Brand
              </NavLink>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <NavLink exact activeClassName={active} to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName={active} to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName={active} to="/contactus">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
