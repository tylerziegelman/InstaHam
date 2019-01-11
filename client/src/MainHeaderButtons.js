import React from 'react';
import './Header.css'
import Button from 'antd/lib/button';
import PostModal from './PostModal'
export default class MainHeaderButtons extends React.Component  {
   
    render(){
        return(
            <div className="button-container">
                <PostModal />
                {/* <Button className="post-button" type="default" onClick={this.showModal}>Post</Button> */}
                <Button className="signout-button" type="default">Sign-out</Button>
            </div>
        )
    }
}