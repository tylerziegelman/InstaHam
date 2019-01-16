import React from 'react';
import axios from "axios"
import Header from './Header'


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


export default class LoginUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null,
            formErrors: {
                username: "",
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
        axios.post("/create",
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then((response) => {

        })

        //   if (formValid(this.state)) {
        //     console.log(`
        //       --SUBMITTING--
        //       Username: ${this.state.username}
        //       Password: ${this.state.password}
        //     `)
        //   } else {
        //     console.error(`Form invalid - display error mesage`)
        //   }
        // }
    }


    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        let formErrors = this.state.formErrors

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
        return (
            <div>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit}>

                            <div className="username">
                                <label htmlFor="username"></label>
                                <input
                                    className={formErrors.username.length > 0 ? "error" : null}
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                   
                                />
                                {formErrors.username.length > 0 && (
                                    <span className="errorMessage">{formErrors.username}</span>
                                )}

                            </div>
                            <div className="password">
                                <label htmlFor="password"></label>
                                <input
                                    className={formErrors.password.length > 0 ? "error" : null}
                                    placeholder="Password"
                                    type="password"
                                    name="password"
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

