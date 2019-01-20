import React from 'react';
import './Header.css'
import MainHeaderButtons from './MainHeaderButtons';
export default class Header extends React.Component  {
    render(){
        console.log(this.props.userData)
        return(
            <header className="header">
                <div className="ham-logo"></div>
                <MainHeaderButtons userData={this.props.userData}/>
            </header>
        )
    }
}