import React from 'react';



// import FoodAndDrink from '../FoodAndDrink.css'
// import generalFood from '../assets/FoodPack/general-food.png'
// import vegetables from '../assets/FoodPack/vegetables.png'
// import fruits from '../assets/FoodPack/fruits.png'
// import drinks from '../assets/FoodPack/drinks.png'
import sweets from '../assets/FoodPack/sweets.png'
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
        
    }

    randInt = () => {

        const min = 1;
        const max = 10;
        const rand = Math.floor(min + Math.random() * (max - min));
        this.setState({ randomInt: rand})
        console.log(`randomInt = ${rand}`);  

    }  
    
    // confirmState = () => {
    //     this.setState({
    //         confirm: true
    //     })
    // }

    // confirmMessageRequest = () => {
    //     console.log(`setState of confirm: `, this.state.confirm);
    //     this.props.fetchFedMessage(this.state.confirm)

        
    // }
    
    // getMessage = async () => {
    //     confirmState()
    //     confirmMessageRequest()

    //     await this.props.fetchFedMessage(this.state.confirm)

    // }
   


    giveFood = async () => {
        console.log(`food gib`);
        
        // const foodItem

        try {
            
            // const res = await axios.post(`${BASE_BACKEND_URL}/pets/:${:pet_id}/action/feed`)
            // const res = await axios.get(`{BASE_BACKEND_URL}/messages/food`)

        } catch (error) {
            
            console.log(`error on feed`);
             
        }

    }
    // giveFoodGetMessage = () => {
    //     this.getMessage()
    //     this.giveFood()

    // }



    giveDrink = async () => {
        console.log(`gib drink`);

        try {
        
            // const res = await axios.post(`http://localhost:3000/pets/:${:pet_id}/action/drink`)
            
        } catch (error) {

            console.log(`error on sweets`);
            
        }
        
    }
    giveSweets = async () => {
        console.log(`sweetz gib`);
        
        try {
        
            // const res = await axios.post(`http://localhost:3000/pets/:${:pet_id}/action/sweets`)
            
        } catch (error) {
            
        }

    }


    render (){

        return(
            
            <div>
                <h2>Food Animation Testing</h2>
                
                <button onClick={this.giveFood}>
                    Food
                </button>
                
                <button onClick={this.giveDrink}>
                    Drink
                </button>

                <button onClick={this.giveSweets}>
                    Sweets
                </button>

                {/* <button onClick={this.randInt}>randInt</button> */}

                <div className='sweets'>
                    <img src={sweets} alt="sweets" 
                    className={`
                        
                        pixelArt 
                        viewbox1
                    
                    `}/>
                </div>
            
                {/* <div id="viewContainer">
                    <CritterType 
                        species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                        frame={this.state.frameInteger}
                        action={this.state.animation}    
                    />
                <div/> */}
            
            
            
            </div>

       

       
        
        );


    } // render


} // class FeedAndDrink


export default FeedAndDrink;