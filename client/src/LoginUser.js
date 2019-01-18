import React from 'react';
import axios from "axios"
import Header from './Header'
import { withRouter } from "react-router";


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
            username: null,
            password: null,
            formErrors: {
                email: "",
                password: "",
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        //{username, password})
        
        axios.post("/login",
       
            {
                email: this.state.email,
                password: this.state.password
            } 
        ).then((response) => {
           this.props.history.push('/home')
           localStorage.setItem("instaham-jwt", `Bearer ${response.data.data.token}`);
        
        })


    }


    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        let formErrors = this.state.formErrors
        console.log(this.state)
        switch (name) {
            case "username":
                formErrors.username =
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
        
        this.setState({ formErrors, [name]: value }, () => console.log(this.state))

    }



    render() {
        const { formErrors } = this.state
        console.log(this.props)
        return (
            <div>
                
                <div className="wrapper">
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


                </div>
        )
    }
}

export default withRouter(LoginUser);