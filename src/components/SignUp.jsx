import React from 'react'
import axios from 'axios'


// const BASE_SIGNUP_URL = 'http://localhost:3000'

let BASE_SIGNUP_URL;
if( process.env.NODE_ENV === 'development'){
    BASE_SIGNUP_URL = 'http://localhost:3000';
} else {
    BASE_SIGNUP_URL = 'https://digi-critter.herokuapp.com';
} // end rails deployment if-else


class SignUp extends React.Component{

    // define the states
    state = {
        name: '',
        email: '',
        password: '',
        display_name: ''

    }

    // handle typing in the form
    handleInput = (ev) => {

        switch(ev.target.name){

            case 'name':
                this.setState({name: ev.target.value})
                // console.log("name:", ev.target.value);
                break;

            case 'display_name':
                this.setState({display_name: ev.target.value})
                // console.log("display_name:", ev.target.value);
                break;

            case 'email':
                this.setState({email: ev.target.value})
                // console.log("email:", ev.target.value);
                break;

            case 'password':
                this.setState({password: ev.target.value})
                // console.log("password:", ev.target.value);
                break;
                default: console.log('sign in better please');

        }


    } // handleInput

    // handle submitting the form
    handleSubmit = async (ev) => {

        // // create a request object to send to knock
        // const request = {'name': this.state.name, 'display_name': this.state.display_name, 'email': this.state.email, 'password': this.state.password}
        // prevent reload
        console.log('new user', this.state);

        ev.preventDefault();

        // Trying new method to post new user
        try{

            const submitDeatils = await axios.post(`
                
                ${BASE_SIGNUP_URL}/users`, {

                name:this.state.name,
                display_name:this.state.display_name,
                email:this.state.email,
                password:this.state.password

            })
            // this.props.setCurrentUser();
            // this.props.history.push('/my_profile');


            // // set state to render the page 
            // // sign-up page goes to home page
            .then(result => {

                localStorage.setItem("jwt", result.data.token.token)

                console.log("jwt", result.data.token.token);
                // set axios default headers to have an authorization key
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.token.token;
                // call the function setCurrentUser that was passed in as a prop so that we can set the current user in Home
                this.props.setCurrentUser();
                // redirec the url of the page to /my_profile so we can load the MyProfile component
                this.props.history.push('/createcritter');

            })

            console.log(submitDeatils);
        }
        catch(err){

            this.setState({

                loading: false, 
                error: err

            })

        }


    }; // handleSubmit

    render () {

        return(

          <form className="signupform" onSubmit={this.handleSubmit}>
            <label>Sign-Up Form</label>
            <br/>

            <input className="logininput"
              onChange={this.handleInput}
              name="name"
              type="name"
              placeholder='Enter Name'
            />
            <br/>

            <input className="logininput"
              onChange={this.handleInput}
              name="display_name"
              type="display_name"
              placeholder='Enter Display Name'
            />
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

            <button className="inputbutton">Sign Up</button>

          </form>

        ); // return


    } // render


} // class SignUp


export default SignUp;