import axios from 'axios';
import React from 'react';
import '../App.css';

// const RAILS_USER_BASE_URL = 'http://localhost:3000/users';

let RAILS_USER_BASE_URL;
if( process.env.NODE_ENV === 'development'){
    RAILS_USER_BASE_URL = 'http://localhost:3000/users';
} else {
    RAILS_USER_BASE_URL = 'https://digi-critter.herokuapp.com';

} // end rails deployment if-else



class User extends React.Component{


    state = {

        users: [],
        loading: true,
        error: null, 
        sorted: [],

    }


    componentDidMount(){

        // We want to load the Users data
        console.log('componentDidMount for users()');
        this.fetchUsers();

    
    } // Mount


    fetchUsers = async () => {

        try{

            const res = await axios.get(RAILS_USER_BASE_URL);
            console.log('users:', res.data)
        
            // Sorting the data in decending format
            const sorted = [...res.data].sort((a, b) => b.total_score - a.total_score) 
            this.setState({

                users: sorted,
                loading: false

            });

        } // try
        catch( err ){

            console.log('Error Loading users from API', err);

            this.setState({

                loading: false,
                error: err // Store the required information for the render
                
            });

        }
        
    } // fetchUsers



    render(){

        return (

            <div className="Users">

                <h1 id="Leader">Leader Board </h1>
               {/* { this.state.users.total_score((a,b) => a.total_score - b.total_score)} */}
               <br />
                <ol>
                {
                    

                    this.state.users.map ( r => 
                    
                    <li id='leader-board' key={r}>
                    Player {r.display_name} <br /> 
                    Score {r.total_score}
                    <br /><br />
                    </li>

                )}
                </ol>

            </div>

        ) // return

    } // render


} // class User

export default User;