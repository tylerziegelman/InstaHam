import React, { Component } from 'react';
import './App.css';
import './Header.css'
import CreateUser from './CreateUser'
import LoginUser from './LoginUser'
import Header from './Header'




class App extends Component {



  render() {
    return (
      <div className="App">
        {/* <Header 
        toggleOpen={this.toggleOpen}/> */}
        {/* <PostModal /> */}
        <CreateUser />
        <LoginUser />

      </div>
    );
  }
}

export default App;

