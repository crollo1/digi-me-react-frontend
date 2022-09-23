import React from "react";

import Pixel1 from '../assets/pixel1.png'
import Pixel2 from '../assets/pixel2.png'
import Pixel3 from '../assets/pixel3.png'
import Pixel4 from '../assets/pixel4.png'
import Pixel5 from '../assets/pixel5.png'
import Pixel6 from '../assets/pixel6.png'
import Pixel7 from '../assets/pixel7.png'

class Test extends React.Component{

    render(){

        return(
            <div>
                <h1 className="homepage">Welcome to Digi-Critter World!! </h1>
                <img className="redblob" src={Pixel1} />
                <img className="pikachu" src={Pixel2} />
                <img className="dinosaur" src={Pixel3} />
                <img className="pop" src={Pixel4} />
                <img className="pinkpolice" src={Pixel5} />
                <img className="pinkblob" src={Pixel6} />
                <img className="mario" src={Pixel7} />
            </div>
        )
    }
}

export default Test;