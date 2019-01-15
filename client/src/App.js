import React, { Component } from 'react';
import './App.css';
import './Header.css'
import Register from './Register'
import LoginUser from './LoginUser'
import RegisterLoginNavigation from './RegisterLoginNavigation'
import Header from './Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PostModal from './PostModal'


class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Header toggleOpen={this.toggleOpen} />
          <RegisterLoginNavigation />

        </div>
      </Router>
    );
  }
}

export default App;

