import React from 'react';


import owlet4frames from "../assets/owletMonster/fourFrames_owlet.png";
import owlet6frames from "../assets/owletMonster/sixFrames_owlet.png";
import owlet8frames from "../assets/owletMonster/eightFrames_owlet.png";


class OwletCritterAnimations extends React.Component {


    render () {


        return(
            <div>
                <h3> Animations for Owlet Critter </h3>
               
                <div className="owletFourFramesViewbox pixelArt" >
                    <img src={owlet4frames} alt="character" 
                    className="
                    idle
                    owletFourFramesSpriteSheet
                    pixelArt"/>
                </div>

                <div className="owletSixFramesViewbox pixelArt">
                    <img src={owlet6frames} alt="character"
                    className="
                    walking
                    owletSixFramesSpriteSheet 
                    pixelArt
                    "/>
                </div>

                <div className="owletEightFramesViewbox pixelArt">
                    <img src={owlet8frames} alt="character" 
                    className="
                    jump
                    owletEigthFramesSpriteSheet
                    pixelArt
                    "/>
                </div>
            </div>
        );  // return()


    }       // render()


}           // class OwletCritterAnimations


export default OwletCritterAnimations;