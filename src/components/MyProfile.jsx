import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
// import Alert from 'react-bootstrap/Alert';

class MyProfile extends React.Component{


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