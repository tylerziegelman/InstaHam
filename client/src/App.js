import React, { Component } from 'react';
import './App.css';
import './Header.css'
import CreateUser from './CreateUser'
import { BrowserRouter, Route } from "react-router-dom";
import HamCard from './HamCard'
import axios from 'axios'

class App extends Component {

 constructor(){
   super()
   this.state={
    data:[],
    user:[]
   }
 }

 componentDidMount() {
  axios.get("/home").then((obj) => {
    
    this.setState({
      data: obj.data.post_data,
      user: obj.data.user_data
    })
  })

  
}

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/create' component={CreateUser}/>
          
        </BrowserRouter>
        <BrowserRouter>
          <Route path='/home'
             component={props=><HamCard 
                                  postData={this.state.data||[]}
                                  userData={this.state.user}  
                                />}
             />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

