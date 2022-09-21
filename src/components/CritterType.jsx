import React from 'react';

import dude4 from "../assets/dudeMonster/fourFrames_dude.png";
import dude6 from "../assets/dudeMonster/sixFrames_dude.png";
import dude8 from "../assets/dudeMonster/eightFrames_dude.png";

import pink4 from "../assets/pinkMonster/fourFrames_pink.png";
import pink6 from "../assets/pinkMonster/sixFrames_pink.png";
import pink8 from "../assets/pinkMonster/eightFrames_pink.png";

import owlet4 from "../assets/owletMonster/fourFrames_owlet.png";
import owlet6 from "../assets/owletMonster/sixFrames_owlet.png";
import owlet8 from "../assets/owletMonster/eightFrames_owlet.png";


class CritterType extends React.Component {

    state={

    }

    renderCritter = {

        /*
         This Object is used to turn 
        the interpolated string into a variable in order to import the correct spritesheet. 
        */

        'dude4': dude4,
        'dude6': dude6,
        'dude8': dude8,

        'pink4': pink4,
        'pink6': pink6,
        'pink8': pink8,

        'owlet4': owlet4,
        'owlet6': owlet6,
        'owlet8': owlet8,

    }

    
    render (){
        
        return(

            <div className={`${this.props.species}${this.props.frame}FramesViewbox pixelArt`} id="viewContainer" >

                <img src={this.renderCritter[this.props.species+this.props.frame]} alt="character" 
                className={`

                    ${this.props.action}
                    ${this.props.species}${this.props.frame}FramesSpriteSheet
                    pixelArt`

                }/>

            </div>

        );
                
    } // render


} // class CritterType


export default CritterType;