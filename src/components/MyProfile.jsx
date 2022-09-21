import React from 'react'
import axios from 'axios'
// import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

// set backend url
const BASE_BACKEND_URL = 'http://localhost:3000'

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
        {/* {/* <h3>{this.props.currentUser.pet}</h3> */}
        {/* <h1>Hello {this.props.currentUser.pet.name}</h1>  */}
      </div>
    );
  }//render​
}//class MyProfile


export default MyProfile;