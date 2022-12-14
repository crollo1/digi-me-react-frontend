import React from 'react';
import CritterType from './CritterType';
import axios from 'axios';
// import Controls from '//Controls';


// import FoodAndDrink from '../FoodAndDrink.css'
// import generalFood from '../assets/FoodPack/general-food.png'
// import vegetables from '../assets/FoodPack/vegetables.png'
// import fruits from '../assets/FoodPack/fruits.png'
// import drinks from '../assets/FoodPack/drinks.png'
// import sweets from '../assets/FoodPack/sweets.png'
// const BASE_BACKEND_URL = 'http://localhost:3000';

let BASE_BACKEND_URL;
if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://digi-critter.herokuapp.com';
} // end rails deployment if-else

    // TODO have randInt drop random food/drink/sweet to Critter
    // randInt = () => {
    //     const min = 1;
    //     const max = 10;
    //     const rand = Math.floor(min + Math.random() * (max - min));
    //     this.setState({ randomInt: rand})
    //     console.log(`randomInt = ${rand}`);  
    // }           // closes randInt() 

class FeedAndDrink extends React.Component {

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

        critterMessages: [],
        loading: true,

        walkingFromLeft: null,
        littleCritter: 'Left',
        
        givenItem: false,
        animationPlayState: 'running',
        id: 'viewContainerTwo',
        minleft: -3, 
        maxLeft: 93, 
        left: 0,
        transform: 1,
        trans: 360

    }   // state 


    componentDidMount(){

        // loads when the page loads so it passes this function
        console.log(`componentDidMount FeedAndDrink`);
        this.walkFromLeft()

    };  // closes componentDidMount()

    
    // function utilises User information to set species
    getSpeciesBaseName = (species) => {

        if(Number.isInteger(parseInt(species[species.length-1])) === true ){
            return species.substring(0, species.length -1) 
        } else{
            return species
        }
       
        
    }           // closes getSpeciesBaseName()


    // --------------------------------------- //
    // --------- Movement Functions ---------- //
    // --------------------------------------- //

    // times movement from left to right
    timeOutWalk = () => {

        setTimeout( () => {
            
            if (this.state.littleCritter === 'Left') {
            
                this.setState({

                    littleCritter: 'Right',
                    walkingFromLeft: false             
                    
                })  // closes this.setState()

                this.walkFromRight()
            } else {

                this.setState({

                    littleCritter: 'Left',
                    walkingFromLeft: true             
        
                })  // closes this.setState()
                this.walkFromLeft()

            }

        }, 6000 );  
    
    }       // closes timeOutWalk


    // function sets critter classes to create movement
    walkFromLeft = () => {

        this.setState({
            
            frameInteger: '6',
            animation: 'walking',
            walkFromLeft: true

        })  // closes setState()
        
        this.timeOutWalk()

    };      // closes walkFromLeft
    // function sets critter classes to create movement
    walkFromRight = () => {

        this.setState({

            frameInteger: '6',
            animation: 'walking',
            walkFromLeft: false

        })  // closes this.setState() 

        this.timeOutWalk()

    };      // closes walkFromRight()
    
    // --------------------------------------- //
    // ----------- Button Functions ---------- //
    // --------------------------------------- //

    // function posts to backend, updating Pet lastDrank:
    //     - also invokes fetchFoodMessage()
    giveFood = async () => {

        console.log(`food gib`);
        this.props.fetchFedMessage()
        
        try {
            
            const res = await axios.post(`${BASE_BACKEND_URL}/pets/${this.props.currentUser.pet.id}/action/feed`)
            console.log(

                `${this.props.messageTitle}`, 
                `${this.props.messageContent}`,
                `${res}`

            ); // check === true

            // changes state to initiate class change on Critter
            this.setState({

                givenItem: true,
                animationPlayState: 'paused'

            })  // closes this.setState()

            this.givenItem()

        } catch (error) {
            
            console.log(`error on feed`);
             
        }       // closes try/catch

    }           // closes giveFood()


    // function posts to backend, updating Pet lastDrank:
    //     - also invokes fetchDrinkMessage()
    giveDrink = async () => {

        console.log(`gib drink`);
        this.props.fetchDrankMessage()
        
        try {
        
            const res = await axios.post(`${BASE_BACKEND_URL}/pets/${this.props.currentUser.pet.id}/action/drink`)
            console.log(

                `${this.props.messageTitle}`, 
                `${this.props.messageContent}`
                `${res}`

            ); // check === true
            
            // changes state to initiate class change on Critter
            this.setState({

                givenItem: true,
                animationPlayState: 'paused'

            })  // closes this.setState()
            
            this.givenItem()

        } catch (error) {

            console.log(`error on sweets`);
            
        }       // closes try/catch

    }           // closes giveDrink()


    // function posts to backend, taking -25exp off Pet total Exp
    //     - also invokes fetchSweetsMessage()
    giveSweets = async () => {

        console.log(`sweetz gib`);  // check === true
        this.props.fetchSweetsMessage()

        try {
        
            const res = await axios.post(`${BASE_BACKEND_URL}/pets/${this.props.currentUser.pet.id}/action/sweets`)
            console.log(

                `${this.props.messageTitle}`, 
                `${this.props.messageContent}`,
                `${res}`

            ); // check === true
            
            // changes state to initiate class change on Critter
            this.setState({

                givenItem: true,
                animationPlayState: 'paused'

            })  // closes this.setState()

            this.givenItem()

        } catch (error) {
            
        }       // closes try/catch

    }           // closes giveSweets()


    // function controls animations when item is given
    givenItem = () => {

        this.setState({

            animationPlayState: 'paused',
            frameInteger: '8',
            animation: 'jump'

        })
        setTimeout( () => {

            this.setState({

                givenItem: false,
                animationPlayState: 'running',
                frameInteger: '6',
                animation: 'walking'
    
            })

        }, 1600)

    }           // closes givenItem()

    moveLeft = () => {

        if( this.state.left <= -35){
            return
        } else {
            this.setState({
                left: this.state.left - 5
            })
        }
        if( this.state.trans === 360){
            this.setState({
                trans: -180
            })
        }
        console.log('clicked')
    }

    moveRight = () => {

        if( this.state.left >= 35){
            return
        } else {
            this.setState({
                left: this.state.left + 5
            })
        }
        if( this.state.trans != 360 ){
            this.setState({
                trans: 360,
            })
        }

    }

    render (){

        return(
            
            <div className="App-fed">
                <h4 className="critterheading">Your Critter: '{this.props.currentUser.pet.name}'</h4>
                
                
                <div id="containerBnC">
                    
                    <button onClick={this.giveFood}
                        className={`
                            all
                            fndButton1
                        `} >
                    </button> {/* closes button-giveFood */}

                    <button onClick={this.giveDrink}
                        className={`
                            all
                            fndButton2
                        `}>                        
                    </button> {/* closes button-giveDrink */}

                    <button onClick={this.giveSweets}
                        className={`
                            all
                            fndButton3
                        `}>
                    </button> {/* closes button-giveSweets */}

                    {/* <div className="critterButtonContainer">

                     <Controls 
                     updateAction={this.updateAction}
                    />

                    </div> */}


                    {
                        <div className="critterMessage">

                            <h5 className='messageText'>
                                {this.props.messageTitle}
                            </h5>  
                            <p className='messageText'>
                                {this.props.messageContent}
                            </p>

                        </div> // closes div-critterMessage 
                    }
                </div>
                    <button className="start-btn" onClick={this.moveLeft}> L </button>

                    <button className="start-btn" onClick={this.moveRight}> R </button> 

                <div id={`critterContainerAlt`} >
   
                    <div 
                        id={this.state.id}
                        style ={{ 
                            marginLeft: `${this.state.left}%`,
                            transform: `rotateY(${this.state.trans}deg)`
                        }}
                        // className={
                        //     `
                        //     biggerCritter${this.state.littleCritter}
                        //     goFrom${this.state.littleCritter}
                        //     ${this.state.animationPlayState}
                        //     `
                        // }
                        >
                            {/* id={this.setState({
                            id: 'viewContainerTwo'})}  */}
                        <CritterType 
                            species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                            frame={this.state.frameInteger}
                            action={this.state.animation} 

                        />

                    </div>
                   
                  
                </div> {/* CLOSES CRITTER CONTAINER */}
            
            </div>
 
        );  // closes return()


    }       // closes render()


}           // class FeedAndDrink


export default FeedAndDrink;