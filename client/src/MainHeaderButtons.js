import React from 'react';
import './Header.css'
import Button from 'antd/lib/button';
import PostModal from './PostModal'
import { withRouter } from "react-router";
import axios from 'axios'
let host;
if (process.env.NODE_ENV === 'production') {
  host = 'https://instaham-api.herokuapp.com'
}else {host = 'http://localhost:3000'}

export class MainHeaderButtons extends React.Component  {
   
constructor() {
    super()
    this.handleSignOut=this.handleSignOut.bind(this)
}

    handleSignOut() {
        axios.post(`${host}/logout`, {

        }).then((response) => {
            this.props.history.push('/create')
            localStorage.clear()
        })
    }
    render(){
        return(
            <div className="button-container">
                <PostModal userData={this.props.userData}/>
                {/* <Button className="post-button" type="default" onClick={this.showModal}>Post</Button> */}
                <Button className="signout-button" type="default" onClick={this.handleSignOut}>Sign-out</Button>
            </div>
        )
    }
}

export default withRouter(MainHeaderButtons);