import React from 'react';
import '../App.css';
import CritterType from './CritterType';
import FightControls from './FightControls';


class FightGame extends React.Component {


    state = {

        // define current user
        // currentUser: undefined,

        /* 
        TODO set when a user is logged in:
        set.state.criterSpecies to User's Critter species
        */

        critterSpecies: '',
        frameInteger: '4',
        animation: 'idle',
        currentUserPet: '',
        currentUserExp: 30,
        opposingUserExp: 100,
        currentUserScore: 0,
        opposingUserScore: 0,
        level: 1,
        gameOver: false,
        koFrame: '8',
        koAnimation: 'ko',
        jumpFrame: '8',
        jumpAnimation: 'jump',
        lostOpposingExp: 100,
        randomInteger: null,
        opposingFrameInteger: '4',
        opposingAnimation: 'idle',
        opposingCritter: null,
        
    };


    componentDidMount() {

        console.log('in component did mount')

        const critterKeys = ['dude', 'pink', 'owlet'].filter(critter => critter !== this.getSpeciesBaseName(this.props.currentUser.pet.species))

        const critterIndex = Math.floor(Math.random() * critterKeys.length);
        this.setState({

            opposingCritter: critterKeys[critterIndex]

        })

        // console.log('check display mounted');

    }

    // renderGameDisplay = async () => {
    //     await this.gameDisplay();
    // }
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

        if (Number.isInteger(parseInt(species[species.length - 1])) === true) {

            return species.substring(0, species.length - 1)

        } else {

            return species

        }


    }


    updateAction = (frames, action, timeout, returnToFrame, returnToAction, damage) => {

        this.setState({ frameInteger: frames, animation: action })

        /* 
        The 'timeout' argument is the amount of miliseconds
        */
        setTimeout(() => this.setState({ 

            frameInteger: returnToFrame, animation: returnToAction, opposingUserExp: this.state.opposingUserExp - damage

        }), timeout)

    }


    updateOpposingAction = (frames, action, timeout, returnToFrame, returnToAction, damage) => {

        this.setState({ opposingFrameInteger: frames, opposingAnimation: action })

        /* 
        The 'timeout' argument is the amount of miliseconds
        */
        setTimeout(() => this.setState({ 

            opposingFrameInteger: returnToFrame, opposingAnimation: returnToAction, currentUserExp: this.state.currentUserExp - damage 

        }), timeout)

    }


    gameWon = () => {

        console.log('gameWon click')
        const newLevel = this.state.level + 1;
        // const wonOpposingExp = 30 + (newLevel * 10); 
        // const newUserScore = this.state.currentUserScore + 1;

        this.setState({

            level: newLevel,
            currentUserExp: 100,
            opposingUserExp: 100 + (this.state.level * 10),
            currentUserScore: this.state.currentUserScore + 1

        })
        console.log('currentUE', this.state.currentUserExp, 'oppoUE', this.state.opposingUserExp, 'lost', this.state.level);

    }


    gameLost = () => {

        console.log('gameLost click')

        if( this.state.level > 1){

            this.setState({ 

                lostOpposingExp: 100 + (this.state.level * 10), 
                currentUserExp: 100,
                opposingUserScore: this.state.opposingUserScore + 1,
                
            });
            
        } else {
            
            this.setState({
                currentUserExp: 100,
                opposingUserExp: 100, // this.state.lostOpposingExp,
                opposingUserScore: this.state.opposingUserScore + 1,
            })

        }

        // const newOpposingScore= this.state.opposingUserScore + 1;
        console.log('currentUE', this.state.currentUserExp, 'oppoUE', this.state.opposingUserExp, 'lost', this.state.level);

    }
    reset = () => {

        window.location.reload(false)

    }


    gameDisplay = () => {

        // hit this like 5 times
        console.log('display game run');

        try {

            if (this.state.opposingUserExp > 0 && this.state.currentUserExp > 0) {

                console.log('opposingUserExp more than zero and currentUserExp more than zero')
                // console.log('user exp', this.state.currentUserExp);
                // console.log('opp exp', this.state.opposingUserExp);

                return (

                    <div id="critterContainerTwo">
                         <div id="level" className="level"> <h4>Level {this.state.level}</h4></div>

                        <div id="gameContainer">
                            <div id="userContainer">

                                <div id="user-game"><h4>{this.props.currentUser.pet.name.toUpperCase()} Score: {this.state.currentUserScore}</h4>
                                </div>

                                <div id="user-xp"><h4>XP {this.state.currentUserExp}</h4>
                                </div>

                                <CritterType id="game-image"

                                    species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                                    frame={this.state.frameInteger}
                                    action={this.state.animation}
                                     
                                />

                            </div>

                            <div id="opponentContainer">

                                <div id="opp-game"><h4>{this.state.opposingCritter.toUpperCase()} Score: {this.state.opposingUserScore}</h4>
                                </div>

                                <div id="user-xp"><h4>XP {this.state.opposingUserExp}</h4>
                                </div>

                                {/* Below returns a random string from the allocated names */}

                                <div id="game-flip">

                                    {this.state.opposingCritter && <CritterType

                                        species={this.state.opposingCritter}
                                        frame={this.state.opposingFrameInteger}
                                        action={this.state.opposingAnimation}

                                    />} 
                                </div>

                            </div>

                        </div>

                        <div id="game-buttons" className="critterButtonContainer">
                            <FightControls

                                updateAction={this.updateAction}
                                updateOpposingAction={this.updateOpposingAction}

                            />

                        </div>

                    </div>

                )

            } else if (this.state.opposingUserExp <= 0) {

                // hit this like 5 times
                console.log('opposingUserExp less than zero')
                // console.log('check, current user win');

                return (<div id="critterContainerTwo">

                    <div id="level" className="level"> <h4>Level {this.state.level}</h4>
                    </div>

                    <div id="game0-buttons" className="reset-game">

                        <button className="start-btn" onClick={this.gameWon}>New Game</button>
                        
                        <button className="start-btn" onClick={this.reset}>Reset</button>

                    </div>

                    <div id="gameContainer">
                        <div id="userContainer">

                            <div id="user-game"><h4>{this.props.currentUser.pet.name.toUpperCase()} WINS</h4>
                            </div>

                            <CritterType id="game-critter"

                                species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                                frame={this.state.jumpFrame}
                                action={this.state.jumpAnimation}

                            />

                        </div>

                        <div id="opponentContainer">

                            <div id="opp-game"><h4>{this.state.opposingCritter.toUpperCase()} YOU LOSE</h4>
                            </div>

                            {/* Below returns a random string from the allocated names */}

                            <div id="game-flip">
                                {this.state.opposingCritter && <CritterType id="game-critter"

                                    species={this.state.opposingCritter}
                                    frame={this.state.koFrame}
                                    action={this.state.koAnimation}

                                />}
                            </div>

                        </div>

                    </div>

                </div>

                )


            } else if (this.state.currentUserExp <= 0) {

                console.log('opposingUserExp less than zero')
                // console.log('oppoent win:')

                return (<div id="critterContainerTwo">

                    <div className="level"> <h4>Level {this.state.level}</h4></div>

                    <div id="game0-buttons" className="reset-game">

                        <button  className="start-btn" onClick={this.gameLost}>New Game</button>
                        <button className="start-btn" onClick={this.reset}>Reset</button>

                    </div>

                    <div id="gameContainer">
                        <div id="userContainer">

                        <div id="user-game"><h4>{this.props.currentUser.pet.name.toUpperCase()} YOU LOSE </h4>
                        </div>

                        <CritterType id="game-critter"

                            species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                            frame={this.state.koFrame}
                            action={this.state.koAnimation}

                        />


                        </div>

                    <div id="opponentContainer">

                        <div id="opp-game"><h4>{this.state.opposingCritter.toUpperCase()} WINS</h4>
                        </div>

                        {/* Below returns a random string from the allocated names */}

                        <div id="game-flip">

                            {this.state.opposingCritter && <CritterType
                                species={this.state.opposingCritter}
                                frame={this.state.jumpFrame}
                                action={this.state.jumpAnimation}
                            />}

                        </div>

                    </div>

                 </div>

                </div>
                )

            }

        } catch (error) {

            console.log('error on game display')

        }

    }

  

    render() {

        // Identifying winning member

        // console.log(currentUserPet);
        
        return (
            
            <>
                {this.gameDisplay()}
            </>
           
        );      // return()


    }           // render()


}               // class CritterComponents


export default FightGame;
