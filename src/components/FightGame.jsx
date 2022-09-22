import React from 'react';
import '../App.css'




import CritterType from './CritterType';
import FightControls from './FightControls';


class FightGame extends React.Component {


    state ={

        // define current user
        // currentUser: undefined,

        /* 
        TODO set when a user is logged in:
        set.state.criterSpecies to User's Critter species
        */ 

        critterSpecies: '',
        frameInteger: '4',
        animation:'idle',
        currentUserPet:'',
        currentUserExp: 10,
        opposingUserExp: 10,
        currentUserScore: 0,
        opposingUserScore: 0,

        /* 
        ** AVAILABLE ANIMATIONS **
            frameInteger:       '4'      
                'punch'      
                'climbing'   
                'hurt'       
                'idle'       
                'throwStone' 
            frameInteger:       '6'
                'oneTwoCombo'
                'runHug'
                'sprint'
                'walking'
                'walkPunchWalk'
            frameInteger:       '8'
                'ko'
                'jump'    
            */ 
        randomInteger: null,
        opposingFrameInteger: '4',
        opposingAnimation: 'idle',
        opposingCritter: null
    };

    componentDidMount() {
        const critterKeys = ['dude', 'pink', 'owlet'].filter(critter => critter !== this.getSpeciesBaseName(this.props.currentUser.pet.species))
        const critterIndex = Math.floor(Math.random() * critterKeys.length);
        this.setState({
            opposingCritter:  critterKeys[critterIndex]
        })

    }

    //generate random critter 
    // Please check below, as not getting the key does this still work
    // getRandomCritter = () => {
    //     const critterKeys = ['dude', 'pink', 'owlet']
    //     const critterIndex = Math.floor(Math.random() * critterKeys.length);
    //     return critterKeys[critterIndex];
    // }

    getSpeciesBaseName = (species) => {
        // 'dude4' - input
        // 'dude' - output
        if(Number.isInteger(parseInt(species[species.length-1])) === true ){
            return species.substring(0, species.length -1) 
        } else{
            return species
        }
       
        
    }

    updateAction = ( frames , action, timeout,  returnToFrame, returnToAction, damage ) => {

        this.setState({ frameInteger: frames , animation: action })
        
        /* 
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout( () => this.setState({ frameInteger: returnToFrame, animation: returnToAction, opposingUserExp: this.state.opposingUserExp - damage }), timeout )  

    }
    updateOpposingAction = ( frames , action, timeout,  returnToFrame, returnToAction, damage ) => {

        this.setState({ opposingFrameInteger: frames , opposingAnimation: action })
        
        /* 
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout( () => this.setState({ opposingFrameInteger: returnToFrame, opposingAnimation: returnToAction, currentUserExp: this.state.currentUserExp - damage }), timeout )  

    }

    resetGame = () => {
        this.setState({
           opposingUserExp: 10,
           currentUserExp: 10, 
        })
    }

    render (){
        // Identifying winning member
        if (this.state.opposingUserExp === 0 || this.state.currentUserExp === 0) {
            return (<div id="resetContainer">
                <button onClick={this.resetGame}/>
            </div>
        )}

        // console.log(currentUserPet);
        return(
            <div id="critterContainer">
                
                <div id="viewContainer">
                    <h4>Player {this.props.currentUser.pet.name} Score: {this.state.currentUserScore}</h4>
                    <CritterType 
                        species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                        frame={this.state.frameInteger}
                        action={this.state.animation}    
                    />

                </div>
                
                <div className="critterButtonContainer">
                    <FightControls 
                        updateAction={this.updateAction}
                        updateOpposingAction={this.updateOpposingAction}
                    />
                </div>

                <div id="opponentContainer">
                <h4>Player {this.state.opposingCritter} Score: {this.state.opposingUserScore}</h4>  
                    {/* Below returns a random string from the allocated names */}
                {this.state.opposingCritter && <CritterType 
                        species={this.state.opposingCritter}
                        frame={this.state.opposingFrameInteger}
                        action={this.state.opposingAnimation}    
                    /> }
                </div>


            </div>
        );      // return()


    }           // render()


}               // class CritterComponents


export default FightGame;
