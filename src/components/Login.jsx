import React from 'react'
import axios from 'axios'

const BASE_BACKEND_URL = 'http://localhost:3000'

class Login extends React.Component{


  state = {
    
    // components that we need to submit
    email: '',
    password: ''

  }

  //handle typing in the form
  handleInput = (ev) => {

    // Switch state between forms of password and email so we dont need two handle inputs i.e. handleInputEmail and handleInputPassword

    switch(ev.target.name){

        case 'email':
            this.setState({email: ev.target.value})
            break;

        case 'password':
            this.setState({password: ev.target.value})
            break;
            default: console.log('sign in properly');

    }
  } //handleInput


  //handle the submit of the login
  //   VERY MAGICAL BELOW DONT UNDERSTAND FULLY
  handleSubmit = (ev) => {

    // create a request object we can pass through to knock
    // create an object to set the keys in state
    const request = {'email': this.state.email, 'password': this.state.password}

    // do an axios post request where we can send through the user details to rails and login
    // goes to url/user_token and sends through a paramter of 'auth' with our request object
    // this sends through username and password to the backend 

    axios.post(`${BASE_BACKEND_URL}/user_token`, {auth: request})
    // if successful then
    .then(result => {

        // set our local storage to have a json web token validating our login
        localStorage.setItem("jwt", result.data.jwt)
        // set axios default headers to have an authorization key
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.jwt;
        
        // call the function setCurrentUser that was passed in as a prop so that we can set the current user in Home
        this.props.setCurrentUser();

        // redirec the url of the page to /my_profile so we can load the MyProfile component
        this.props.history.push('/');

    })
    .catch(err => {

        console.warn(err)
        console.log('incorrect log in');
        // TODO: put an alert here!!!! ##########################

    })
    ev.preventDefault();

  }

    // render simple form to take in email and password
  render(){

    return(

      <form className="loginform" onSubmit={this.handleSubmit}>

        <label>Login Form</label>
        <br/>
        <input className="logininput"

          onChange={this.handleInput}
          name="email"
          type="email"
          placeholder='Enter Email'

        />
        <br/>
        <input className="logininput"

          onChange={this.handleInput}
          name="password"
          type="password"
          placeholder='Enter Password'

        />
        <br/>
        <button className="inputbutton">Login</button>

      </form>

    ); // return

  }// render

} // class Login

export default Login;