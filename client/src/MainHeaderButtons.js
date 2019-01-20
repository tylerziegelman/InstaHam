import React from 'react';
import './Header.css'
import Button from 'antd/lib/button';
import PostModal from './PostModal'
import { withRouter } from "react-router";

export class MainHeaderButtons extends React.Component  {
   
constructor() {
    super()
    this.handleSignOut=this.handleSignOut.bind(this)
}

    handleSignOut() {
        this.props.history.push('/create')
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