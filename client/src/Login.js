import React from 'react';
import axios from "axios"
// import mountNode from 'react-dom'
// import reactDOM from 'react-dom'
// import ReactDOM from 'reactDOM'


//email Regexpression is for the password so it can be any characters has .com or .net on the end
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

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


export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
  }
  //e.preventDefault() keeps page from refreshing after clicking submit
  handleSubmit = e => {
    axios.post("/create")
    e.preventDefault()

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `)
    } else {
      console.error(`Form invalid - display error mesage`)
    }
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    let formErrors = this.state.formErrors
    
    //switch is a cleaner else if statement
    //using ternary operator which is the ? so if value.length is less than 2 first string is executed if not second 


    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? 'minimum 2 characters required' : ""
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? 'minimum 2 characters required' : ""
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) ? '' : "Invalid email address"
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
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
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
              <button type="submit">Create Account</button>
              <small>Already have an Account?</small>
            </div>
          </form>

        </div>

      </div>

    )
  }



}