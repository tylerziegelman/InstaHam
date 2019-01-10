import React from 'react';
import './Header.css'
import Button from 'antd/lib/button';
export default class MainHeaderButtons extends React.Component  {
    render(){
        return(
            <div className="button-container">
                <Button className="post-button" type="default">Post</Button>
                <Button className="signout-button" type="defaut">Sign-out</Button>
            </div>
        )
    }
}