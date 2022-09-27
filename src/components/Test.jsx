import React from "react";

import Home from './Home';

import Pixel1 from '../assets/pixel1.png'
import Pixel2 from '../assets/pixel2.png'
import Pixel3 from '../assets/pixel3.png'
import Pixel4 from '../assets/pixel4.png'
import Pixel5 from '../assets/pixel5.png'
import Pixel6 from '../assets/pixel6.png'
import Pixel7 from '../assets/pixel7.png'

class Test extends React.Component{

    state = {

        user: '',

    }

    setTestUser = () => {

        

    }


    render(){

        return(

            <div>
                <h1 className="homepage">Welcome to Digi-Critter World!! </h1>
                <img className="redblob" src={Pixel1} alt="redblob"/>
                <img className="pikachu" src={Pixel2} alt="pikachu"/>
                <img className="dinosaur" src={Pixel3} alt="dinosaur"/>
                <img className="pop" src={Pixel4} alt="pop"/>
                <img className="pinkpolice" src={Pixel5} alt="pinkpolice"/>
                <img className="pinkblob" src={Pixel6} alt="pinkblob"/>
                <img className="mario" src={Pixel7} alt="mario"/>
            </div>

        )

    }
    
}

export default Test;