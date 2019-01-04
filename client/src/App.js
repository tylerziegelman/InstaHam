import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'antd/lib/button';



class App extends Component {
constructor(){
  super()
  
}

  render() {
    return (
      <div className="App">
        <Button type="default">Button</Button>
      </div>
    );
  }
}

export default App;
