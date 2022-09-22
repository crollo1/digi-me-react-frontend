import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';

// import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

// set backend url
// const BASE_BACKEND_URL = 'http://localhost:3000'

class MyProfile extends React.Component{

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

    // render simple greeting with user name
  render(){
    return(
      <div>
        <h1>Hello {this.props.currentUser.name}</h1> 
         <h3>Pet Name: {this.props.currentUser.pet.name}</h3>
        <Form>
          <h2>Update Details</h2>
          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  Name
              </Form.Label>
              <Form.Control required type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  Email Address
              </Form.Label>
              <Form.Control required type="name" placeholder="Email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  Display name
              </Form.Label>
              <Form.Control required type="name" placeholder="Display name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>
                  Password
              </Form.Label>
              <Form.Control required type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="info" type="submit">Update</Button>
        </Form>

       
        {/* <h1>Hello {this.props.currentUser.pet.name}</h1>  */}
        {/* <CritterComponents /> */}
      </div>
    );
  }//render​
}//class MyProfile


export default MyProfile;