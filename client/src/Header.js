import React from 'react';
import './Header.css'
import MainHeaderButtons from './MainHeaderButtons';
import axios from 'axios'
let host;
if (process.env.NODE_ENV === 'production') {
  host = 'https://instaham-api.herokuapp.com'
}else {host = 'http://localhost:3000'}

export default class Header extends React.Component  {

    

    constructor() {
        super()
        this.state = {
            user: {}
        }
        
    }

    componentDidMount() {
        axios.get(`${host}/user`,
            {
                headers: {
                  Authorization: localStorage.getItem("instaham-jwt")
            }
        }).then((obj)=>{
            this.setState({
                user: obj.data.current_user
            })
        })
         
    }
    render(){
     
        return(
            <header className="header">
                <div className="ham-logo"></div>
                <span className="user-greeting">Welcome: {this.state.user.username}</span>
                <MainHeaderButtons submitPost={this.props.submitPost} postData={this.props.postData}/>
            </header>
        )
    }
}