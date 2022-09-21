import React from 'react';
import '../App.css'

import DudeCritterAnimations from './DudeCritterAnimations.jsx';
import OwletCritterAnimations from './OwletCritterAnimations.jsx';
import PinkCritterAnimations from './PinkCritterAnimations.jsx';

import FeedAndDrink from './FeedAndDrink'
import CritterType from './CritterType';
import Controls from './Controls';


class CritterComponents extends React.Component {
    state ={

        // define current user
        currentUser: undefined,

        /* 
        TODO set when a user is logged in:
        set.state.criterSpecies to User's Critter species
        */ 

        critterSpecies: 'pink',
        frameInteger: '4',
        animation:'idle',

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

    updateAction = ( frames , action, timeout,  returnToFrame, returnToAction ) => {

        this.setState({ frameInteger: frames , animation: action })
        
        /* 
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout( () => this.setState({ frameInteger: returnToFrame, animation: returnToAction }), timeout )  

    }

    render (){


        return(
            <div id="critterContainer">
                
                <div id="viewContainer">
                    <CritterType 
                        species={this.state.critterSpecies}
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