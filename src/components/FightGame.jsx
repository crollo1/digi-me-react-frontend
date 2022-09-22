import React from 'react';
import '../App.css'




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
        opposingUserExp: 30,
        currentUserScore: 0,
        opposingUserScore: 0,
        level: 1,
        gameOver: false,
        koFrame: '8',
        koAnimation: 'ko',
        jumpFrame: '8',
        jumpAnimation: 'jump',


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
        opposingCritter: null,
        level: 1,
    };

    componentDidMount() {
        console.log('in component did mount')
        const critterKeys = ['dude', 'pink', 'owlet'].filter(critter => critter !== this.getSpeciesBaseName(this.props.currentUser.pet.species))
        const critterIndex = Math.floor(Math.random() * critterKeys.length);
        this.setState({
            opposingCritter: critterKeys[critterIndex]
        })

        // this.gameDisplay();
        // this.gameLost();
        // this.gameWon();

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
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout(() => this.setState({ frameInteger: returnToFrame, animation: returnToAction, opposingUserExp: this.state.opposingUserExp - damage }), timeout)

    }
    updateOpposingAction = (frames, action, timeout, returnToFrame, returnToAction, damage) => {

        this.setState({ opposingFrameInteger: frames, opposingAnimation: action })

        /* 
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout(() => this.setState({ opposingFrameInteger: returnToFrame, opposingAnimation: returnToAction, currentUserExp: this.state.currentUserExp - damage }), timeout)

    }

    // resetGame = () => {
    //     // const newOpposingUserScore = this.state.opposingUserScore;
    //     // const newCurrentUserScore = this.state.currentUserScore;
    //     // const newOpposingUserExp = this.state.opposingUserExp;
    //     // const newCurrentUserExp = this.state.currentUserExp;
    //     if (this.state.opposingUserExp === 0){
    //         const newCurrentUserScore = this.state.currentUserScore + 1;
    //         const newOpposingUserExp = 5;
    //         this.setState({
    //             currentUserScore: newCurrentUserScore,
    //             opposingUserExp: newOpposingUserExp,
    //             currentUserExp: 3
    //         })
    //     } else{
    //         const newOpposingUserScore = this.state.opposingUserScore +1;
    //         this.setState({
    //             opposingUserScore: newOpposingUserScore,
    //             currentUserExp: 3,
    //             opposingUserExp: 3 
    //          })
    //     }

    // }

    //    displayResetButton = () =>{
    //     if (this.state.opposingUserExp === 0 ||this.state.currentUserExp === 0){
    //             <div id="resetContainer">
    //                 <button onClick={this.resetmeDisGame}/>
    //             </div>
    //     }
    //     }
    gameWon = () => {
        console.log('gameWon click')
        const newLevel = this.state.level + 1;
        // const wonOpposingExp = 30 + (newLevel * 10); 
        // const newUserScore = this.state.currentUserScore + 1;
        this.setState({
            level: newLevel,
            currentUserExp: 30,
            opposingUserExp: 30 + (this.state.level * 10),
            currentUserScore: this.state.currentUserScore + 1

        })
        console.log('currentUE', this.state.currentUserExp, 'oppoUE', this.state.opposingUserExp, 'lost', this.state.level);

    }
    gameLost = () => {
        console.log('gameLost click')
        const lostOpposingExp = 30 + (this.state.level * 10);
        // const newOpposingScore= this.state.opposingUserScore + 1;
        this.setState({
            currentUserExp: 30,
            opposingUserExp: 30 + (this.state.level * 10),
            opposingUserScore: this.state.opposingUserScore + 1,
        })
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
                    <div id="critterContainer">
                        <div className="level"> <h4>Level {this.state.level}</h4></div>
                        <br /> <br />

                        <div id="viewContainer">
                            <h4>Player {this.props.currentUser.pet.name.toUpperCase()} Score: {this.state.currentUserScore}</h4>
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
                            <h4>Player {this.state.opposingCritter.toUpperCase()} Score: {this.state.opposingUserScore}</h4>
                            {/* Below returns a random string from the allocated names */}
                            {this.state.opposingCritter && <CritterType
                                species={this.state.opposingCritter}
                                frame={this.state.opposingFrameInteger}
                                action={this.state.opposingAnimation}
                            />}
                        </div>


                    </div>
                )

            } else if (this.state.opposingUserExp <= 0) {
                // hit this like 5 times
                console.log('opposingUserExp less than zero')
                // console.log('check, current user win');
                return (<div id="critterContainer">
                    <div className="level"> <h4>Level {this.state.level}</h4></div>
                    <br /><br />
                    <div id="viewContainer">
                        <h4>Player {this.props.currentUser.pet.name.toUpperCase()} Score: {this.state.currentUserScore}</h4>
                        <CritterType
                            species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                            frame={this.state.jumpFrame}
                            action={this.state.jumpAnimation}
                        />

                    </div>
                    <div className="reset-game">
                        <button className="game-lost" onClick={this.gameWon}>New Game</button>
                        <button className="game-won" onClick={this.reset}>Reset</button>

                    </div>
                    {/* <div className="critterButtonContainer">
                                <FightControls 
                                    updateAction={this.updateAction}
                                    updateOpposingAction={this.updateOpposingAction}
                                />
                            </div> */}

                    <div id="opponentContainer">
                        <h4>Player {this.state.opposingCritter.toUpperCase()} Score: {this.state.opposingUserScore}</h4>
                        {/* Below returns a random string from the allocated names */}
                        {this.state.opposingCritter && <CritterType
                            species={this.state.opposingCritter}
                            frame={this.state.koFrame}
                            action={this.state.koAnimation}
                        />}
                    </div>


                </div>
                )
            } else if (this.state.currentUserExp <= 0) {
                console.log('opposingUserExp less than zero')
                // console.log('oppoent win:')
                return (<div id="critterContainer">
                    <div className="level"> <h4>Level {this.state.level}</h4></div>
                    <br /><br />
                    <div id="viewContainer">
                        <h4>Player {this.props.currentUser.pet.name.toUpperCase()} Score: {this.state.currentUserScore}</h4>
                        <CritterType
                            species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
                            frame={this.state.koFrame}
                            action={this.state.koAnimation}
                        />

                    </div>
                    <div className="reset-game">
                        <button className="game-won" onClick={this.gameLost}>New Game</button>
                        <button className="game-won" onClick={this.reset}>Reset</button>
                    </div>
                    {/* <div className="critterButtonContainer">
                                <FightControls 
                                    updateAction={this.updateAction}
                                    updateOpposingAction={this.updateOpposingAction}
                                />
                            </div> */}

                    <div id="opponentContainer">
                        <h4>Player {this.state.opposingCritter.toUpperCase()} Score: {this.state.opposingUserScore}</h4>
                        {/* Below returns a random string from the allocated names */}
                        {this.state.opposingCritter && <CritterType
                            species={this.state.opposingCritter}
                            frame={this.state.jumpFrame}
                            action={this.state.jumpAnimation}
                        />}
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



        // else if(this.state.currentUserExp === 0){
        //     this.state.opposingUserScore = this.state.opposingUserScore + 1;
        //     return (<div id="resetContainer">
        //     <button onClick={this.resetGame}/> Reset
        //     </div>)
        // }

        // console.log(currentUserPet);
        return (

            // <div>
            //     <button onClick={this.renderGameDisplay} >New Game </button>
            //     {/* <GameDisplay /> */}
            // </div>
            <>
                {this.gameDisplay()}
            </>
            // <div id="critterContainer">

            //     <div id="viewContainer">
            //         <h4>Player {this.props.currentUser.pet.name} Score: {this.state.currentUserScore}</h4>
            //         <CritterType 
            //             species={this.getSpeciesBaseName(this.props.currentUser.pet.species)}
            //             frame={this.state.frameInteger}
            //             action={this.state.animation}    
            //         />

            //     </div>

            //     <div className="critterButtonContainer">
            //         <FightControls 
            //             updateAction={this.updateAction}
            //             updateOpposingAction={this.updateOpposingAction}
            //         />
            //     </div>

            //     <div id="opponentContainer">
            //     <h4>Player {this.state.opposingCritter} Score: {this.state.opposingUserScore}</h4>  
            //         {/* Below returns a random string from the allocated names */}
            //     {this.state.opposingCritter && <CritterType 
            //             species={this.state.opposingCritter}
            //             frame={this.state.opposingFrameInteger}
            //             action={this.state.opposingAnimation}    
            //         /> }
            //     </div>
            //     {this.displayResetButton}

            // </div>
        );      // return()


    }           // render()


}               // class CritterComponents


export default FightGame;
