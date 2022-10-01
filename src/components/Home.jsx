import React from 'react';
import '../App.css';
import Test from './Test';
import User from './User';
import { Route, HashRouter as Router, Link } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import MyProfile from './MyProfile';
import axios from 'axios';
// -------- Critter Related Imports ------------ //
import CreateCritter from './CreateCritter';
import FeedAndDrink from './FeedAndDrink'
import FightGame from './FightGame';




// backend url
// const BASE_BACKEND_URL = 'http://localhost:3000';
// This function combines CritterType & Controls for use
//      in a seperate route link

let BASE_BACKEND_URL = 'http://localhost:3000';
// if( process.env.NODE_ENV === 'development'){
//     BASE_BACKEND_URL = 'http://localhost:3000';
// } else {
//     BASE_BACKEND_URL = 'https://digi-critter.herokuapp.com';
// } // end rails deployment if-else


class Home extends React.Component {

    
    // home states

    state ={

        // define current user
        currentUser: null,

        // querying message when critter is given food/drink/sweets
        loading: true,
        error: null,

        // holds message once receieved from request to backend
        messageContent: '',
        messageTitle: '',
        messageReceived: false,
    
    };


    // --------------User Related--------------- //

    // function to run on component mounting
    componentDidMount(){

        // loads when the page loads so it passes this function
        this.setCurrentUser();

    };
    

    // function to set the state of the current logged in user
    setCurrentUser = () => {

        // set the token value - authenication 
        let token = localStorage.getItem("jwt");
        console.log('token: ', token); // check === true
        // axios get request 
        
        if (token === null) {
            
            // if login token not present, prevent
            // remainder of function from running
            return;
            
        }
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;

        axios.get(`${BASE_BACKEND_URL}/users/current`)
        // successful load gets res data and sets it to current user
        .then(res => {
   
            this.setState({currentUser: res.data})
            // console.log("home:", res.data); // check === true

        })
        .catch(err => console.warn(err))

    };      // closes setCurrentUser()

    
    // function to handle the logging user out
    handleLogout = () => {

        // Set our state of current user to undefined.
        this.setState({currentUser: null});
        // Remove the jwt token from our local storage
        localStorage.removeItem("jwt");
        // Set our axios default headers to undefined.
        axios.defaults.headers.common['Authorization'] = undefined;

        // window.location.href = window.location.origin + '/#/home'

        // TODO reset path to login
    }


    //------------------------------------------ //
    // --------- FEED&DRINK Related ------------ //
    //------------------------------------------ //


    // function that resets state.message elements
    timeOutMessage = async () => {

        setTimeout( () => {
            
            this.setState({

                messageTitle: '',
                messageContent: '',
                messageReceived: false                
    
            })  // closes this.setState()

        }, 8000);   
    
        
    }               // closes timeOutMessage()

    // function gets 'Food' message from backend
    fetchFedMessage = async () => {
            
        try {
            
            const response = await axios.get(`${BASE_BACKEND_URL}/messages/food.json`);
            // console.log(`response: `, response.data ); // check === true

            this.setState({

                messageTitle: response.data.fed_message.title,
                messageContent: response.data.fed_message.content,
                messageReceived: true                
            
            })  // closes this.setState()
            
            // invoking timeOutMessage limits the duration 
            // of the message being displayed by Critter
            this.timeOutMessage()

        } catch (error) {
            
            this.setState({

                loading: false,
                error: error

            })  // closes this.setState()

        }       // closes try/catch

    }           // closes fetchFedMessage()

    // function gets 'Drink' message from backend
    fetchDrankMessage = async () => {
            
        try {
            
            const response = await axios.get(`${BASE_BACKEND_URL}/messages/drink.json`);
            console.log(`response: `, response.data );
        
            this.setState({

                messageTitle: response.data.drank_message.title,
                messageContent: response.data.drank_message.content,                
                
            }); // closes this.setState() 

            // invoking timeOutMessage limits the duration 
            // of the message being displayed by Critter
            this.timeOutMessage()
        
        } catch (error) {
            
            this.setState({

                loading: false,
                error: error

            })  // closes this.setState()
        
        }       // closes try/catch

    }           // cloese fetchDrankMessage()

    // function gets 'Sweets' message from backend
    fetchSweetsMessage = async () => {
            
        try {
            
            const response = await axios.get(`${BASE_BACKEND_URL}/messages/sweets.json`);
            console.log(`response: `, response.data );
        
            this.setState({

                messageTitle: response.data.sweets_message.title,
                messageContent: response.data.sweets_message.content,
                
            }); // closes this.setState()

            // invoking timeOutMessage limits the duration 
            // of the message being displayed by Critter
            this.timeOutMessage()
        
        } catch (error) {
            
            this.setState({

                loading: false,
                error: error

            })  // closes this.setState()
        
        }       // closes try/catch

    }           // closes fetchSweetsMessage()

    // function updates critter animation/action
    updateAction = ( frames , action, timeout,  returnToFrame, returnToAction ) => {

        this.setState({ frameInteger: frames , animation: action })
        
        /* 
        The 'timeout' argument is the amount of miliseconds first action lasts before returnToAction is set
        */
        setTimeout( () => this.setState({ frameInteger: returnToFrame, animation: returnToAction }), timeout )  

    }           // closes updateAction()
    //------------------------------------------ //
    //------------------------------------------ //

    render(){
        return (
            
            <div className="App"> 
            <Router>

                <header>

                    {/* Showing on nav bar login/sign-up requests with if statement */}
                    {
                        this.state.currentUser !== null
                        ?
                        (
                            <div className='Login'>
                                {/* <h4>Welcome {this.state.currentUser.name}</h4> */}
                                <h4>
                                    <Link to='/my_profile'>My Profile</Link>
                                    {' '}| {' '}
                                    <Link onClick={this.handleLogout} to='/'>Logout</Link>
                                </h4>
                            </div>
                        )
                        :
                        (
                            <div className='Login'>
                                <h4>
                                    <Link to='/login'>Login</Link>
                                    {' '}|{' '}
                                    <Link to='/signup'>Sign Up</Link>
                                </h4>
                            </div>
                        )
                    } 
                    {/* Section above handles display of login/logout funcitonality */}
                    
                    <h1 className="title">Digi-Critter</h1>

                   { this.state.currentUser !== null
                   ?
                   (
                    <nav>
                        {/* Links to various pages */}
                        <Link to="/" className="little">Home</Link>
                        {'  '}|{'   '}
                        <Link to="/critter_hangs" className="little">Health Check</Link>
                        {'  '}|{'   '}
                        <Link to="/fight" className="little">Battle</Link>
                        {'  '}|{'   '}
                        <Link to="/scores" className="little">Leader Board</Link>
                        <hr />
                    </nav> 
                    )
                    :
                   (

                    <nav>
                        {/* Links to various pages */}
                        <Link to="/" className="little">Home</Link>
                        {'  '}|{'   '}
                        <Link to="/scores" className="little">Ledder Board</Link>
                        <hr />
                    </nav> 

                    )
                   }


                </header> {/* CLOSES HEADER */}     
                

                            {/* Routes to the various pages */}
                                  {/* change below */}
            {/* ------------------------------------------------------------- */}

                    {this.state.currentUser &&
                        <Route exact path="/createcritter" render={(props) => 
                        <CreateCritter currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} {...props}/>
                    }
                    />}

                    {this.state.currentUser &&
                        <Route exact path="/fight" render={() => 
                        <FightGame currentUser ={this.state.currentUser}/>}
                    />}

                    {this.state.currentUser &&
                        <Route exact path="/my_profile" render={(props) => 
                        <MyProfile currentUser={this.state.currentUser} {...props}  />}
                    />}
                    
                    <Route exact path='/login' render={
                        (props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>
                    }/>

                    <Route exact path='/signup' render={
                        (props) => <SignUp setCurrentUser={this.setCurrentUser}{...props}/>
                    }/>

                    <Route exact path="/users" component={User}/>
                    
                    {this.state.currentUser && 

                        <Route exact path="/critter_hangs" render={ props => (

                            <FeedAndDrink {... props} 

                                fetchFedMessage={this.fetchFedMessage}
                                fetchDrankMessage={this.fetchDrankMessage}
                                fetchSweetsMessage={this.fetchSweetsMessage}
                                currentUser={this.state.currentUser}
                                messageTitle={this.state.messageTitle}
                                messageContent={this.state.messageContent}

                            />

                        )}

                    />}      

                    <Route exact path='/game' render={
                        (props) => <FightGame setCurrentUserExp={this.setCurrentUserExp}{...props}/>
                    }/>

                    <Route exact path='/game' render={
                        (props) => <FightGame setOpposingtUserExp={this.setCurrentUser}{...props}/>
                    }/>
                    <Route exact path='/scores' render={
                        (props) => <User  setCurrentUser={this.setCurrentUser}{...props}/>
                    }/>
                    <Route exact path='/' component={Test}/>
            {/* ------------------------------------------------------------ */}

            </Router> {/* CLOSES ROUTER */}
         
            </div>  // CLOSES WRAPPER DIV 
 
        ); // return

    } // render

} // Home 

export default Home;