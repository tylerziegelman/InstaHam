import React from 'react';
import axios from "axios"
import HeaderNoBtns from './HeaderNoBtns'
import Register from './Register'
import LoginUser from './LoginUser'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"






export default class RegisterLoginNavigator extends React.Component {
    constructor(props) {
        super(props)
    }




    render() {
        
        return (
            
            <div>
            <HeaderNoBtns />
                <div className="wrapper">
                    <div className="form-wrapper-navigation">
                        <div className="nav-controller">
                            
                            <Link to="/register"><button className="nav-button-register nav-button">Register</button></Link>
                            <Link to="/login"><button className="nav-button-login nav-button">Login</button></Link>
                           
                            
                            
                            
                  
                            
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}