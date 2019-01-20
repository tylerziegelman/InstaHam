import React from 'react';
import axios from "axios"
import HeaderNoBtns from './HeaderNoBtns'
import { withRouter } from "react-router";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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

  //for formErrors object were passing it along to formValid function and set the forms valid to true. runs through each value from formErrors object
  //if value.length(which is strings) is > than 0 which is an error
}


export class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: null,
      password: null,
      email: null,
      formErrors: {
        username: "",
        password: "",
        email: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  //e.preventDefault() keeps page from refreshing after clicking submit
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    //{username, email, password})
    axios.post("/create",
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        
      }
    ).then((response) => {
      
      this.props.history.push('/home')
    })

    //   if (formValid(this.state)) {
    //     console.log(`
    //       --SUBMITTING--
    //       Username: ${this.state.username}
    //       Password: ${this.state.password}
    //       Email: ${this.state.email}
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

    //switch is a cleaner else if statement
    //using ternary operator which is the ? so if value.length is less than 2 first string is executed if not second 


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
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      default:
        break;

    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state))

  }


  render() {
    const { formErrors } = this.state
    return (
      
      <div className="wrapper">
        <HeaderNoBtns />
        <div className="form-wrapper">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="username">
              <label htmlFor="username"></label>
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username"
                type="username"
                name="username"
                noValidate
                onChange={this.handleChange}
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
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="createAccount">
              <button onClick={this.handleSubmit}>Create Account</button>
            </div>
          </form>

        </div>

      </div>
    )
  }



}

export default withRouter(Register);
