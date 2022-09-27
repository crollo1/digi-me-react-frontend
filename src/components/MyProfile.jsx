import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import '../App.css';
import axios from 'axios';


// import Alert from 'react-bootstrap/Alert';

// import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

// set backend url
const BASE_BACKEND_URL = 'http://localhost:3000'

class MyProfile extends React.Component{

  state = {
    name: '',
    email: '',
    password: '',
    display_name: '',
    pet_name: '',
    species: ''

    // name: this.props.currentUser.name,
    // email: this.props.currentUser.email,
    // password: this.props.currentUser.password,
    // display_name: this.props.currentUser.display_name,
    // pet_name: this.props.currentUser.pet.name,
    // species: this.props.currentUser.pet.species,

}

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
      
          default: console.log('sign in better please');

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
  updateProfileInfo = async () => {


    try{
      const res = await axios.post(`${BASE_BACKEND_URL}/users/current/update/`, {

                name:this.state.name,
                display_name:this.state.display_name,
                email:this.state.email,
                password:this.state.password, 
                pet_name: this.props.currentUser.pet.name,
                species: this.props.currentUser.pet.species

      });
      console.log('response from total score:', res.data)

    }catch (err){
      console.log('error', err)
    }

  }

  

    // render simple greeting with user name
  render(){

    return(

      <div>

        <h1>Hello {this.props.currentUser.name}</h1> 
         {/* <h3>Pet Name: {this.props.currentUser.pet.name}</h3> */}
        <Form>
          <h2>Personal Details</h2>
          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  <h4>Name </h4>
              </Form.Label>
              <Form.Control required name="name" type="name"  onChange={this.handleInput}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  <h4>Pet Name </h4>
              </Form.Label>
              <Form.Control required name="pet_name" type="pet_name" value={this.props.currentUser.pet.name} onChange={this.handleInput}/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  <h4>Display name</h4>
              </Form.Label>
              <Form.Control required name="display_name" type="display_name" value={this.props.currentUser.display_name}  onChange={this.handleInput}/>  
          </Form.Group>

          <Form.Label>
               <h4> Pet Species </h4>
              </Form.Label>
          <Form.Select className="mb-3" name="species" type="species" controlId="formBasicName" onChange={this.handleInput}>
                        <option>{this.props.currentUser.pet.species}</option>
                        <option value="dude"> Dude</option>
                        <option value="pink"> Pink </option>
                        <option value="owlet"> Owlet </option>
            </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  <h4>Email Address</h4>
              </Form.Label>
              <Form.Control required name="email" type="email" value={this.props.currentUser.email} onChange={this.handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  <h4>Password</h4>
              </Form.Label>
              <Form.Control required name="password" type="password" value={this.props.currentUser.password} onChange={this.handleInput}/>
          </Form.Group>

          <Button variant="info" type="submit" className="update" onClick = {this.updateProfileInfo}>Update</Button>
        </Form>

      </div>

    );

  }//render​
  
}//class MyProfile


export default MyProfile;