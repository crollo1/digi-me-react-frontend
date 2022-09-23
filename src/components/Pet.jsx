
import React from "react";
import axios from "axios";

const RAILS_USER_BASE_URL = 'http://localhost:3000/pets';

class Pet extends React.Component{

    state = {

        pet: [],
        loading: true,
        error: null
    
    }


    componentDidMount(){

        // We want to load the Pet data
        console.log('componentDidMount for pet()');
        this.fetchPet();
    
    } // Mount


    fetchPet = async () => {

        try{

            const res = await axios.get(RAILS_USER_BASE_URL);
            console.log('pet:', res.data)

            this.setState({

                pet: res.data,
                loading: false

            });

        } // try
        catch( err ){

            console.log('Error Loading pet from API', err);

            this.setState({

                loading: false,
                error: err // Store the required information for the render
                
            });

        }
        
    } // fetch

    render(){

        return(

            <div className="Pet">

                <h1>Pet</h1>

                <ul>
                {
                    this.state.pet.map ( p => 
                    
                    <li>
                    Name: {p.name} {""}{""} 
                    Age:{p.age} {""}{""} 
                    Species:{p.species} {""}{""} 
                    Level:{p.level} {""}{""} 
                    Experience:{p.experience} {""}{""} 
                    User ID: {p.user_id} {""}{""}
                    </li>

                )}
                </ul>

            </div>

        )//return

    } // render()

} // class Pet

export default Pet;