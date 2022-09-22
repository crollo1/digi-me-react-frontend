import React from 'react';
import CritterType from './CritterType';
import axios from 'axios';


// import FoodAndDrink from '../FoodAndDrink.css'
// import generalFood from '../assets/FoodPack/general-food.png'
// import vegetables from '../assets/FoodPack/vegetables.png'
// import fruits from '../assets/FoodPack/fruits.png'
// import drinks from '../assets/FoodPack/drinks.png'
// import sweets from '../assets/FoodPack/sweets.png'
const BASE_BACKEND_URL = 'http://localhost:3000';


class FeedAndDrink extends React.Component {

    // Food button will random select from either generalFood, vegetables, fruits. 
    // After selection it will randomly pick a food sprite element to use.


    // Drink button will random select a drink sprite element to use from drinks.png


    // Sweets button will random select a sweet sprite element to use from sweets.png
    state = {

        sweetsInt: null,
        drinkInt: null,
        foodInt: null,
        randomInt: null,

        confirm: false,
        
        critterSpecies: '',
        frameInteger: '4',
        animation:'idle',
        currentUserPet:'',
    }

    randInt = () => {

        const min = 1;
        const max = 10;
        const rand = Math.floor(min + Math.random() * (max - min));
        this.setState({ randomInt: rand})
        console.log(`randomInt = ${rand}`);  

    }  


    giveFood = async () => {
        console.log(`food gib`);
        this.props.fetchFedMessage()

        try {
            
            const res = await axios.post(`${BASE_BACKEND_URL}/pets/${this.props.currentUser.pet.id}/action/feed`)

            console.log(`pet last_fed updated with: `, res );

        } catch (error) {
            
            console.log(`error on feed`);
             
        }

    }

    giveDrink = async () => {
        console.log(`gib drink`);
        this.props.fetchDrankMessage()


        try {
        
            const res = await axios.post(`${BASE_BACKEND_URL}/pets/${this.props.currentUser.pet.id}/action/drink`)

            console.log(`pet last_drank updated with: `, res );
            
            
        } catch (error) {

            console.log(`error on sweets`);
            
        }
        
    }

    giveSweets = async () => {
        console.log(`sweetz gib`);
        this.props.fetchSweetsMessage()

        try {
        
            const res = await axios.post(`http://localhost:3000/pets/${this.props.currentUser.pet.id}/action/sweets`)

            console.log(`fetchSweetMessage`, res );
            
        } catch (error) {
            
        }

    }

    getSpeciesBaseName = (species) => {

        if(Number.isInteger(parseInt(species[species.length-1])) === true ){
            return species.substring(0, species.length -1) 
        } else{
            return species
        }
       
        
    }

    render (){

        return(
            
            <div>
                <h2>Critter - {this.props.currentUser.pet.name}</h2>
                
                <button onClick={this.giveFood}
                className="all fndButton1" >
                   
                </button>
                
                <button onClick={this.giveDrink}
                className="all fndButton2">
                    
                </button>

                <button onClick={this.giveSweets}
                className="all fndButton3">
                    
                </button>

                {/* <div className='sweets'>
                    <img src={sweets} alt="sweets" 
                    className={`
                        
                        pixelArt 
                        viewbox1
                    
                    `}/>
                </div> */}

                <div id="critterContainer">

                    <div id="viewContainer">
                        <CritterType 
                            species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                            frame={this.state.frameInteger}
                            action={this.state.animation}    
                        />

                    </div>
                
                </div> {/* CLOSES CRITTER CONTAINER */}

            
            
            </div>

       

       
        
        );


    } // render


} // class FeedAndDrink


export default FeedAndDrink;