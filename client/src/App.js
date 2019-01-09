import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
import Button from 'antd/lib/button';
import Login from './Login'





class App extends Component {


  render() {
    return (
      <div className="App">
        <Login />
        <Button type="default">Button</Button>
      </div>
    );
  }
}

export default App;

