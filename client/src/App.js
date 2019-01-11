import React, { Component } from 'react';
import './App.css';
import './Header.css'
import Login from './Login'
import Header from './Header'




class App extends Component {

 

  render() {
    return (
      <div className="App">
       {/* <Header 
        toggleOpen={this.toggleOpen}/> */}
        {/* <PostModal /> */}
        <Login />
      </div>
    );
  }
}

export default App;

