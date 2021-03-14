import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrapg.css';
import '../index.css';

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <p className="navbar-brand">DAILY JOURNAL</p>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li id="home"><a href="http://localhost:3000/">HOME</a></li>
          <li id="about"><a href="http://localhost:3000/about">ABOUT US</a></li>
          <li id="contact"><a href="http://localhost:3000/contact">CONTACT US</a></li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar;