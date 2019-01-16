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
        console.log(this.props.userData)
        return (
            
            <div>
            <Header />
                <div className="wrapper-navigation">
                    <div className="form-wrapper-navigation">
                        <div className="nav-controller">
                            
                            <Link to="/create/register"><button className="nav-button">Register</button></Link>
                            <Route path="/create/register" 
                                    component={props => {return<Register userDataReg={this.props.userData}/>}}>
                            </Route>
                            
                         
                            <Link to="/create/login"><button className="nav-button">Login</button></Link>
                            <Route path="/create/login" 
                            
                            component={props => {return<LoginUser userDataLogin={this.props.userData}/>}}>
                            
                            </Route>
                            
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}