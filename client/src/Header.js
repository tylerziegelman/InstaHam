import React from 'react';
import './Header.css'
import MainHeaderButtons from './MainHeaderButtons';
export default class Header extends React.Component  {
    render(){
        
        return(
            <header className="header">
                <div className="ham-logo"></div>
                <MainHeaderButtons submitPost={this.props.submitPost} postData={this.props.postData}/>
            </header>
        )
    }
}