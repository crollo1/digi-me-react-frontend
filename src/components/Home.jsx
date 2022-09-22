import React from 'react';

import User from './User';
import { Route, HashRouter as Router, Link } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import MyProfile from './MyProfile';
import axios from 'axios';
// -------- Critter Related Imports ------------ //
import CreateCritter from './CreateCritter';
// import CritterComponents from './CritterComponents';
import FeedAndDrink from './FeedAndDrink'
// import CritterType from './CritterType';
// --------------------------------------------- //
// Fight components
import FightGame from './FightGame';



// backend url
const BASE_BACKEND_URL = 'http://localhost:3000';
// This function combines CritterType & Controls for use
//      in a seperate route link


class Home extends React.Component {

    
    // home states
    state ={

        // define current user
        currentUser: null,

        // querying message when critter is given food/drink/sweets
        critterMessageTitle: null,
        critterMessageContent: null,
        loading: true,
        error: null
        
    };


    // --------------User Related--------------- //
    // function to run on component mounting
    componentDidMount(){

        // loads when the page loads so it passes this function
        this.setCurrentUser();

    };
    // function to set the state of the current logged in user
    setCurrentUser = () => {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.jwt;
       
        // set the token value - authenication 
        let token = "Bearer " + localStorage.getItem("jwt");

        // axios get request 
        axios.get(`${BASE_BACKEND_URL}/users/current`, {

            headers: {

                'Authorization': token

            }

        })
        // successful load gets res data and sets it to current user
        .then(res => {

            this.setState({currentUser: res.data})
            console.log("home:", res.data);

        })
        .catch(err => console.warn(err))

    };
    // function to handle the logging user out
    handleLogout = () => {

        // Set our state of current user to undefined.
        this.setState({currentUser: undefined});
        // Remove the jwt token from our local storage
        localStorage.removeItem("jwt");
        // Set our axios default headers to undefined.
        axios.defaults.headers.common['Authorization'] = undefined;

    };
    //------------------------------------------ //
    

    // ------------Message Related-------------- //
    fetchFedMessage = async () => {
            
        try {
            
            const response = await axios.get(`${BASE_BACKEND_URL}/messages/food.json`);
            console.log(`response: `, response.data );
            


            this.setState({

                critterMessageTitle: response.data.title,
                critterMessageContent: response.data.content,
                loading: false

            });  

            
        
        } catch (error) {
            
            this.setState({

                loading: false,
                error: error

            })

        
        }    

            


    }
    fetchDrankMessage = async () => {
            
        try {
            
            const response = await axios.get(`${BASE_BACKEND_URL}/messages/drink.json`);
            console.log(`response: `, response.data );
        
            this.setState({

                critterMessageTitle: response.data.title,
                critterMessageContent: response.data.content,
                loading: false

            });    
        
        } catch (error) {
            
            this.setState({

                loading: false,
                error: error

            })

        
        }    

            


    }
    fetchSweetsMessage = async () => {
            
        try {
            
            const response = await axios.get(`${BASE_BACKEND_URL}/messages/sweets.json`);
            console.log(`response: `, response.data );
        
            this.setState({

                critterMessageTitle: response.data.title,
                critterMessageContent: response.data.content,
                loading: false

            });    
        
        } catch (error) {
            
            this.setState({

                loading: false,
                error: error

            })

        
        }    

            


    }   
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
                        <h1>Digi-Critter</h1>

                        <nav>
                            {/* Links to various pages */}
                            <Link to="/">Home</Link>
                            {'  '}|{'   '}
                            <Link to="/food_test">Food Testing</Link>
                            {'  '}|{'   '}
                            <Link to="/fight">Fight</Link>
                           
                        </nav>
                        
                        <hr />
                        
                    </header> {/* CLOSES HEADER */}     
                
                {/* Routes to the various pages */}
                    {/* change below */}
            {/* ------------------------------------------------------------- */}
                    {this.state.currentUser &&
                        <Route exact path="/createcritter" render={(props) => 
                        <CreateCritter currentUser ={this.state.currentUser}{...props}/>}
                    />}

                    {this.state.currentUser &&
                        <Route exact path="/fight" render={() => 
                        <FightGame currentUser ={this.state.currentUser}/>}
                    />}
                    
                    {this.state.currentUser &&
                        <Route exact path="/my_profile" render={(props) => 
                        <MyProfile currentUser={this.state.currentUser} {...props}  />}/>}
                    {/* <MyProfile currentUser ={this.state.currentUser} {...props}  />}/>} */}
                    
                    <Route exact path='/login' render={
                        (props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>
                    }/>
                    
                    <Route exact path='/signup' render={
                        (props) => <SignUp setCurrentUser={this.setCurrentUser}{...props}/>
                    }/>
                    
                    <Route exact path="/users" component={User}/>
                    
                    
                    <Route 
                        exact path="/food_test"
                        render={ props => (
                            <FeedAndDrink {... props} 
                                fetchFedMessage={this.fetchFedMessage}
                                fetchDrankMessage={this.fetchDrankMessage}
                                fetchSweetsMessage={this.fetchSweetsMessage}
                                currentUser={this.state.currentUser}
                                loading={this.state.loading}
                            />
                        )}
                        
                    />

                    <Route exact path='/game' render={
                        (props) => <FightGame setCurrentUserExp={this.setCurrentUserExp}{...props}/>
                    }/>

                    <Route exact path='/game' render={
                        (props) => <FightGame setOpposingtUserExp={this.setCurrentUser}{...props}/>
                    }/>
                    
                    {/* <Route exact path="/game" component={CritterComponents}/> */}
            {/* ------------------------------------------------------------ */}

                <footer>
                    
                    <p className="footerText">&copy; Critters.Co.2022</p>

                </footer> {/* CLOSES FOOTER */}

            </Router> {/* CLOSES ROUTER */}

            </div>  // CLOSES WRAPPER DIV 
 
        ); // return

    } // render

} // Home 

export default Home;