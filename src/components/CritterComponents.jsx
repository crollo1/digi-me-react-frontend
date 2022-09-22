import React from 'react';
import '../App.css'

import FeedAndDrink from './FeedAndDrink'
import CritterType from './CritterType';
import Controls from './Controls';


class CritterComponents extends React.Component {


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
    };

    getSpeciesBaseName = (species) => {
        // 'dude4' - input
        // 'dude' - output
        if(Number.isInteger(parseInt(species[species.length-1])) === true ){
            return species.substring(0, species.length -1) 
        } else{
            return species
        }
       
        
    }

    updateAction = ( frames , action, timeout,  returnToFrame, returnToAction ) => {

        this.setState({ frameInteger: frames , animation: action })
        
        /* 
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout( () => this.setState({ frameInteger: returnToFrame, animation: returnToAction }), timeout )  

    }

    render (){

        // console.log(currentUserPet);
        return(
            <div id="critterContainer">
                
                <div id="viewContainer">
                    <CritterType 
                        species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                        frame={this.state.frameInteger}
                        action={this.state.animation}    
                    />

                </div>
                
                <div className="critterButtonContainer">
                    <Controls 
                        updateAction={this.updateAction}
                    />
                </div>

                <div 
                className="careControls">
                    <FeedAndDrink
                    // pass function to FeedAndDrink
                    />
                </div>

            </div>
        );      // return()


    }           // render()


}               // class CritterComponents


export default CritterComponents;