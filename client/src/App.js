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
      user: obj.data.user_data,
      
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
                                                        userData={this.state.user}


                                                    />}/>
        <Route path="/register" render={(props)=> <Register/>}/>
        <Route path="/login" render={(props)=> <LoginUser/>}/>
        <Route path='/home'
             component={props=><HamCard 
                                  postData={this.state.data||[]}
                                  userData={this.state.user}  
                                />}
             />
          </div>
        </BrowserRouter>
     </div>
       
    );
  }
}

export default App;

