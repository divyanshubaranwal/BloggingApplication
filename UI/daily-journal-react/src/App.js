import React, { Component } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Compose from "./components/compose";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./components/post";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/compose" component={Compose} />
          <Route path="/posts/:id" component={Post} />
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
