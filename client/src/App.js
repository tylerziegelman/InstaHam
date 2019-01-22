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
    posts:[]
   
   }
 }

 componentDidMount() {
  axios.get("/home").then((obj) => {
  
    this.setState({
      posts: obj.data.post_data
      
      
    })
   return(obj.data.post_data.map((post)=>{
    let counter = 0;
    return(post.likes.forEach((like)=>{
      if (like.type === 0) {
        counter++
        console.log(`post ${like.post_id} has ${counter} dislikes`)
      }else if(like.type===1) {console.log(`post ${like.post_id} has ${counter} likes`)}
    }))
    
   }))
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

