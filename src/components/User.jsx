import axios from 'axios';
import React from 'react';
const RAILS_USER_BASE_URL = 'http://localhost:3000/users';



class User extends React.Component{


    state = {

        users: [],
        loading: true,
        error: null

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

            this.setState({

                users: res.data,
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

                <h1>Users</h1>

                <ul>
                {
                    this.state.users.map ( r => 
                    
                    <li key={r}>
                    Name: {r.name} <br /> 
                    Display Name:{r.display_name} <br /> 
                    User ID: {r.user_id} <br />
                    <br />
                    </li>

                )}
                </ul>

            </div>

        ) // return

    } // render


} // class User

export default User;