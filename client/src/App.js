import React, { Component } from 'react';
import './App.css';
import './Header.css'

import { BrowserRouter, Route } from "react-router-dom";
import HamCard from './HamCard'
import axios from 'axios'
import Register from './Register'
import LoginUser from './LoginUser'
import RegisterLoginNavigation from './RegisterLoginNavigation'
import Header from './Header'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PostModal from './PostModal'
let host;
if (process.env.NODE_ENV === 'production') {
  host = 'https://instaham-api.herokuapp.com'
}else {host = 'http://localhost:3000'}

class App extends Component {

 constructor(){
   super()
   this.state={
    posts:[]
   
   }
 }

 componentDidMount() {
  axios.get(`${host}/home`).then((obj) => {
    
    this.setState({
      posts: obj.data.post_data
      
      
    })
   
  })

  
}
render() {
    
    return (
      <div className="App">
         <BrowserRouter>
          <div>
          {/* <Route path='/create' component={CreateUser}/> */}
           <Route path="/create" component={props=> <RegisterLoginNavigation 
                                                       


                                                    />}/>
        <Route path="/register" render={(props)=> <Register/>}/>
        <Route path="/login" render={(props)=> <LoginUser/>}/>
        <Route path='/home'
             component={props=><HamCard 
                                  postData={this.state.posts||[]}
                                   
                                />}
             />
          </div>
        </BrowserRouter>
     </div>
       
    );
  }
}

export default App;

