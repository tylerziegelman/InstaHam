import React from 'react';
import axios from "axios"
import HeaderNoBtns from './HeaderNoBtns'
import { withRouter } from "react-router";

let host;
if (process.env.NODE_ENV === 'production') {
  host = 'https://instaham-api.herokuapp.com'
}else {host = 'http://localhost:3000'}
const formValid = ({ formErrors, ...rest }) => {
    let valid = true

    //validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    })

    //validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    })

    return valid
}


export class LoginUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            logged_in: false,
            token: null,
            formErrors: {
                email: "",
                password: "",
                logged_in: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        
        //{username, password})
        
        axios.post(`${host}/login`,
       
            {
                email: this.state.email,
                password: this.state.password,
               
            } 
        ).then((response) => {
           localStorage.setItem("instaham-jwt", `Bearer ${response.data.data.token}`);
           this.props.history.push(`/home`)
        })


    }


    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        let formErrors = this.state.formErrors
        
        switch (name) {
            case "email":
                formErrors.email =
                    value.length < 6
                        ? 'minimum 6 characters required' : ""
                break;
            case "password":
                formErrors.password =
                    value.length < 6
                        ? 'minimum 6 characters required' : ""
                break;
            default:
                break;

        }
        
        this.setState({ formErrors, [name]: value })
      
    }



    render() {
        const { formErrors } = this.state
        return (
            
            
            
               
                <div className="wrapper">
                <HeaderNoBtns />
                    <div className="form-wrapper">
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit}>

                            <div className="username">
                                <label htmlFor="email"></label>
                                <input
                                    className={formErrors.email.length > 0 ? "error" : null}
                                    placeholder="email"
                                    type="text"
                                    name="email"
                                    onChange={this.handleChange}
                                />
                                {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                )}

                            </div>
                            <div className="password">
                                <label htmlFor="password"></label>
                                <input
                                    className={formErrors.password.length > 0 ? "error" : null}
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                                {formErrors.password.length > 0 && (
                                    <span className="errorMessage">{formErrors.password}</span>
                                )}
                            </div>
                            <div className="login-button">
                                <button onClick={this.handleSubmit}>Login</button>
                            </div>




                        </form>
                    </div>
                </div>


                
            
        )
    }
}

export default withRouter(LoginUser);