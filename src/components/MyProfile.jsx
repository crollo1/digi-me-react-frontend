import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import '../App.css';
import axios from 'axios';


// import Alert from 'react-bootstrap/Alert';

// import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

// set backend url
let BASE_BACKEND_URL;
if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://digi-critter.herokuapp.com';
} // end rails deployment if-else

class MyProfile extends React.Component{

  state = {


    name: this.props.currentUser.name,
    email: this.props.currentUser.email,
    password: this.props.currentUser.password,
    display_name: this.props.currentUser.display_name,
    pet_name: this.props.currentUser.pet.name,
    species: this.props.currentUser.pet.species,

}


// componentDidMount

handleInput = (ev) => {
  // console.log('name', ev.target.name)
  // console.log()
  console.log('name', ev.target.name, 'value', ev.target.value)

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
          console.log("email this works");
          break;
      case 'pet_name':
          this.setState({pet_name: ev.target.value})
          // console.log("password:", ev.target.value);
          break;
      case 'species':
            this.setState({species: ev.target.value})
            // console.log("password:", ev.target.value);
        break;
      case 'password':
          this.setState({password: ev.target.value})
          // console.log("password:", ev.target.value);
          break;
      
          default: console.log('States have changed');

  }


} // handleInput


    // set states for each profile - current user with name and email
  // state = {
  //   currentUser: null,
  //   currentUserPet: null,
  // }

  // function to run a loading page
  // componentDidMount(){
  //   // set the token value - authenication 
  //   let token = "Bearer " + localStorage.getItem("jwt");
  //   // axios get request 
  //   axios.get(`${BASE_BACKEND_URL}/users/current`, {
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  //   // successful load gets res data and sets it to current user
  //   .then(res => {
  //     this.setState({currentUser: res.data})
  //     console.log("myprofile:", res.data);
  //   })
  //   .catch(err => console.warn(err))

  //   // axios.get(`${BASE_BACKEND_URL}/pets`, {
  //   //   headers: {
  //   //     'Authorization': token
  //   //   }
  //   // })
  //   // // successful load gets res data and sets it to current user
  //   // .then(res => {
  //   //   const num = res.data.length
  //   //   console.log("res.data:", res.data);
  //   //   console.log("res.data:", res.data[num-1]);
  //   //   this.setState({currentUserPet: res.data[num-1]})
  //   // })
  //   // .catch(err => console.warn(err))
  // }
  updateProfileInfo = async (ev) => {
      ev.preventDefault();
    
    console.log('trying to post')
    try{
      const res = await axios.post(`${BASE_BACKEND_URL}/users/current/update`, {

                name:this.state.name,
                display_name:this.state.display_name,
                email:this.state.email,
                password:this.state.password, 
                pet_name: this.state.pet_name,
                species: this.state.species

      })
      // .then( result){

        console.log('post', res.data);

      // //   localStorage.setItem("jwt", result.data.token.token)

      // //   console.log("jwt", result.data.token.token);
      // //   // set axios default headers to have an authorization key
      // //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.token.token;
      // //   // call the function setCurrentUser that was passed in as a prop so that we can set the current user in Home
      // //   this.props.setCurrentUser();
      // //   // redirec the url of the page to /my_profile so we can load the MyProfile component
      //   console.log()
        this.props.history.push('/');

        window.location.reload(false);
      // }.catch(err){
      //   console.log('error', err);
      // };

    }catch (err){
      // console.log('error message from post')
      console.log('error', err)
    }

  }

  

    // render simple greeting with user name
  render(){

    return(

      <div className='My-profile'>

        <h2>Hello {this.props.currentUser.name}</h2> 
         {/* <h3>Pet Name: {this.props.currentUser.pet.name}</h3> */}
        <Form onSubmit={this.updateProfileInfo}>
          <h3>Personal Details</h3>
          <br /> <br />
          <Form.Group className="mb-3" controlid="formBasicName" >
              <Form.Label>
                  <h4>Name </h4>
              </Form.Label>
              <Form.Control required name="name" defaultValue={this.props.currentUser.name} onChange={this.handleInput}/>
          </Form.Group>

          <Form.Group className="mb-3" controlid="formBasicName" >
              <Form.Label>
                  <h4>Pet Name </h4>
              </Form.Label>
              <Form.Control required name="pet_name"  defaultValue={this.props.currentUser.pet.name} onChange={this.handleInput}/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlid="formBasicName" >
              <Form.Label>
                  <h4>Display name</h4>
              </Form.Label>
              <Form.Control required name="display_name"  defaultValue={this.props.currentUser.display_name}  onChange={this.handleInput}/>  
          </Form.Group>

          <Form.Label>
               <h4> Pet Species </h4>
              </Form.Label>
          <Form.Select className="mb-3" name="species"  controlid="formBasicName" onChange={this.handleInput}>
                        <option>{this.props.currentUser.pet.species}</option>
                        <option value="dude"> dude</option>
                        <option value="pink"> pink </option>
                        <option value="owlet"> owlet </option>
            </Form.Select>

          <Form.Group className="mb-3" controlid="formBasicName" >
              <Form.Label>
                  <h4>Email Address</h4>
              </Form.Label>
              <Form.Control required name="email" defaultValue={this.props.currentUser.email} onChange={this.handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlid="formBasicName" >
              <Form.Label>
                  <h4>Password</h4>
              </Form.Label>
              <Form.Control required name="password" defaultValue={this.props.currentUser.password} onChange={this.handleInput}/>
          </Form.Group>

          <Button variant="info"  className="update" type="submit">Update</Button>
        </Form>

      </div>

    );

  }//render​
  
}//class MyProfile


export default MyProfile;