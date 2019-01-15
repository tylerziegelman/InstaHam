import React from 'react';
import axios from "axios"
import Header from './Header'
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
                <div className="wrapper-navigation">
                    <div className="form-wrapper-navigation">
                        <div className="nav-controller">
                            <Link to="/Register"><button className="nav-button">Register</button></Link>
                            <Link to="/login"><button className="nav-button">Login</button></Link>
                            <Route path="/login" component={LoginUser}></Route>
                            <Route path="/register" component={Register}></Route>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}