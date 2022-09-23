import React from "react";
import axios from 'axios';

import dude4 from "../assets/dudeMonster/fourFrames_dude.png";
import pink4 from "../assets/pinkMonster/fourFrames_pink.png";
import owlet4 from "../assets/owletMonster/fourFrames_owlet.png";

const BASE_CREATECRITTER_URL = 'http://localhost:3000'
// species2: 'dude4',
// species3: 'owlet4',

const critters = ['dude4', 'pink4', 'owlet4']

class CreateCritter extends React.Component{

    state = {

        currentUser: '',
        // frame: '4',
        // action: 'idle',
        species: 'pink4',
        // species2: 'dude4',
        // species3: 'owlet4',
        // classname: 'pink4',
        clickCount: 0,
        name:'',
        // age: 1, 
        // level: 1, 
        // experience:1,
        // last_fed: 0,
        // last_fought: 0,
        // last_slept: 0, 
        // last_stretched: 0,
        // last_drank: 0, 
        loading: true,
        error: null

    }
    
    componentDidMount(){
        this.setState({
            currentUser: this.props.currentUser
        })
        console.log("currentuser:", this.props.currentUser)
        
    }

    renderSelection = {

        'dude4': dude4,
        'pink4': pink4,
        'owlet4': owlet4,

    }

    count = () => {

        if (this.state.clickCount === 0){
            this.setState ({species: "pink4"});
            // this.setState({clickCount: 0})
            console.log('pink4', this.state.species);
        } else if (this.state.clickCount === 1){
            this.setState ({species: "dude4"});

            console.log('dude4', this.state.species);
        } else {
            this.setState ({species: "owlet4"});
            console.log('owlet4', this.state.species);
        }

    };

    submitLeft = () =>{

        console.log('left click');
        if (this.state.clickCount <= 0){
            return
        } else {
            const newClickCount = this.state.clickCount -1
            this.setState({clickCount: newClickCount})
            this.count();
        }
        // console.log('newCount', this.state.newClickCount)


    };

    submitRight = () =>{

        console.log('right click');
        if (this.state.clickCount >= 2){
            return
        } else {
            const newClickCount = this.state.clickCount +1
            this.setState({clickCount: newClickCount})
            this.count();
        }
        // console.log('newCount', this.state.newClickCount)


    };

    critterName = (ev) => {
        
        this.setState({name: ev.target.value});
        console.log('name:', ev.target.value)
        
    };

    
    // submit new users specify selection
    submitNewCritter = async (ev) => {
        
            
        
        console.log('new user species', this.state.species);

        ev.preventDefault();

        try{

            const submitNewPet = await axios.post(
                
                `${BASE_CREATECRITTER_URL}/pets`, {
                name:this.state.name,
                // age:this.state.age,
                // level:this.state.level,
                // experience:this.state.experience,
                species: critters[this.state.clickCount],
                // last_fed:this.state.last_fed,
                // last_fought:this.state.last_fought,
                // last_slept:this.state.last_slept, 
                // last_stretched:this.state.last_stretched,
                // last_drank:this.state.last_drank
                user_id: this.state.currentUser.id

            })
            console.log(submitNewPet)
            // .then(result => {
                // localStorage.setItem("jwt", result.data.token.token)

                // console.log("jwt", result.data.token.token);
                // // set axios default headers to have an authorization key
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.token.token;
                // // call the function setCurrentUser that was passed in as a prop so that we can set the current user in Home
                // this.props.setCurrentUser();
                // redirec the url of the page to /my_profile so we can load the MyProfile component
                // this.props.setCurrentUser();
                
                console.log("history:",this.props.history)
                this.props.history.push('/game');
                
            // })

            console.log(submitNewPet);
        } catch(err){
            // TODO: add error validation if a missing field
            this.setState({
                loading: false, 
                error: err
            })

        }


       

    }

    render(){

        return (

            <div className="Create">
                
                <h3 className="createCritter">Create your own Critter</h3>

                <div className={`${critters[this.state.clickCount]}FramesViewbox pixelArt`} >

                    <img src={this.renderSelection[critters[this.state.clickCount]]} alt="character" 
                        className={`
                        
                            idle
                            ${critters[this.state.clickCount]}FramesSpriteSheet
                            pixelArt`

                        }/>
                </div>
                <br />

                {/* <div className="dude4FramesViewbox pixelArt" >
                    <img src={dude4frames} alt="character" 
                    className={`
                    idle
                    ${this.state.species2}FramesSpriteSheet
                    pixelArt`}/>
                </div>
                <br />
                <div className="owlet4FramesViewbox pixelArt" >
                    <img src={owlet4frames} alt="character" 
                    className={`
                    idle
                    ${this.state.species3}FramesSpriteSheet
                    pixelArt`}/>
                </div> */}
                <br /><br />
                <button onClick={this.submitLeft} className="left" disabled={this.state.clickCount === 0}>Left</button>
                <button onClick={this.submitRight} className="right" disabled={this.state.clickCount === critters.length - 1}>Right</button>
                <br /><br />
                <br /><br />
                <form className="selectcritter" onSubmit = {this.submitNewCritter}>
               
                <input className="logininput"
                onChange={this.critterName}
                name="name"
                type="name"
                placeholder='Enter Pet Name'
                />
                <br /><br />
                <button className="inputbutton" onClick = {this.submitNewCritter}>Select Critter</button>
                </form>

            </div>

                // 'idle',
                // '4',
                // 'idle',
                // 800

        ) // return


    } // render


}

export default CreateCritter;