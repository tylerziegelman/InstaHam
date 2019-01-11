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

  //for formErrors object were passing it along to formValid function and set the forms valid to true. runs through each value from formErrors object
  //if value.length(which is strings) is > than 0 which is an error
}


export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",
        password: ""
      }
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  
  
  //e.preventDefault() keeps page from refreshing after clicking submit
 handleSubmit(e) {
   e.preventDefault()
   console.log(this.state)
   //{username, email, password})
   axios.post("/create",
    {
      username: this.state.username,
      email: "aaa@a.com",
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
      default:
        break;

    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state))

  }


  render() {
    const { formErrors } = this.state
    return (
      <>
      <Header/>
      <div className="wrapper">
      
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
           
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
              <small>Already have an Account?</small>
            </div>
          </form>

        </div>

      </div>
    </>
    )
  }



}