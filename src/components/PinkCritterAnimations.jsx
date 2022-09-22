import React from 'react';


import pink4frames from "../assets/pinkMonster/fourFrames_pink.png";
import pink6frames from "../assets/pinkMonster/sixFrames_pink.png";
import pink8frames from "../assets/pinkMonster/eightFrames_pink.png";


class PinkCritterAnimations extends React.Component {

    
    render () {


        return(
            <div>
                <h3> Animations for Pink Critter </h3>
                
                <div className="pink4FramesViewbox pixelArt" >
                    <img src={pink4frames} alt="character" 
                    className="
                    idle
                    pink4FramesSpriteSheet
                    pixelArt"/>
                </div>

                <div className="pink6FramesViewbox pixelArt">
                    <img src={pink6frames} alt="character"
                    className="
                    walking
                    pink6FramesSpriteSheet 
                    pixelArt
                    "/>
                </div>

                <div className="pink8FramesViewbox pixelArt">
                    <img src={pink8frames} alt="character" 
                    className="
                    jump
                    pink8FramesSpriteSheet
                    pixelArt
                    "/>
                </div>
            </div>
        );  // return()


    }       // render()


}           // class PinkCritterAnimations


export default PinkCritterAnimations;