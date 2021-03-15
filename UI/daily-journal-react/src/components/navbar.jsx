import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import { Link } from "react-router-dom";
import About from './about';

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">DAILY JOURNAL</Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li id="home"><Link to="/">HOME</Link></li>
          <li id="home"><Link to="/about">ABOUT</Link></li>
          <li id="home"><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar;