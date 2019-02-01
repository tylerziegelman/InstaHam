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
   this.handleSubmitPost = this.handleSubmitPost.bind(this)

 }







handleSubmitPost = (image_url,description,username) => {
  //need to query the backend to get the username
  axios.post(`${host}/post`, {
    image_url: image_url,
    description: description,
    username: username
  },{
    headers: {
      Authorization: localStorage.getItem('instaham-jwt')
    }
  }).then((response)=>{
     
    this.setState({
      posts: response.data.post_data
    })
    
  })
  
  // this.handleInputChange(e,{value})
  
 
  this.setState({
    visible: false,
  });
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
                                  handleLike={this.handleLike}
                                  postData={this.state.posts||[]}
                                  submitPost = {this.handleSubmitPost} 
                                />}
             />
          </div>
        </BrowserRouter>
     </div>
       
    );
  }
}

export default App;