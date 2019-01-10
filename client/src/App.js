import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
import './Header.css'
import Login from './Login'
import Header from './Header'




class App extends Component {


  render() {
    return (
      <div className="App">
       <Header />
        <Login />
      </div>
    );
  }
}

export default App;

