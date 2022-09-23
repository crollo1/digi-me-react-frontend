import React from 'react';
import '../App.css'

const availableActions = {
    runHug: {
        frame: '6',
        type: 'runHug',
        wait: 3600,
        afterFrame: '4',
        damage: 35,
    },
    climbing: {
        frame: '4',
        type: 'climbing',
        wait: 3600,
        afterFrame: '4',
        damage: 30,
    },
    throwStone: {
        frame: '4',
        type: 'throwStone',
        wait: 800,
        afterFrame: '4',
        damage: 20,
    }, 
    oneTwoCombo: {
        frame: '6',
        type: 'oneTwoCombo',
        wait: 1600,
        afterFrame: '4',
        damage: 15, 
    }   
   
}



class FightControls extends React.Component {
    
    
    /* -------------------------------------- */
    /*            *** INFO ***
        Each function below is tied to a
        button in render(). When its button is pressed,
        the function passes data back to the
        parent [Home.jsx] file, which is used by the updateAction function to change the value of key:value pairs in state={} to make the Critter perform a different animation/action.  

        Each argument, and the value it affects, are explained below.
    */
    /* 
    ******    'updateAction()' arguments     ******
        
        firstArg = frameInteger of first action
        
        secondArg = first action 
        
        thirdArg = time between change from first to second action 
        
        fourthArg = second action 
        
        fifthArg = frameInteger of second action
    */
    /* -------------------------------------- */
  
    // generate random action
    getRandomAction = () => {
        const actionKeys = Object.keys(availableActions);
        const selectedIndex = Math.floor(Math.random() * actionKeys.length);

        return availableActions[actionKeys[selectedIndex]];
    }

    // Select key for movement 
    sendAction = (key) => {

        this.props.updateAction(      
            availableActions[key].frame,
            availableActions[key].type,
            availableActions[key].wait,
            availableActions[key].afterFrame,
            'idle', 
            availableActions[key].damage,
        )

        const opposingAction = this.getRandomAction();

        setTimeout(() => this.props.updateOpposingAction(
            opposingAction.frame,
            opposingAction.type,
            opposingAction.wait,
            opposingAction.afterFrame,
            'idle',
            opposingAction.damage,
        ),  availableActions[key].wait + 1000)

    }

    critterRunHug= () => {

        this.props.updateAction( 
            
            availableActions.runHug.frame,
            availableActions.runHug.type,
            availableActions.runHug.wait,
            availableActions.runHug.afterFrame,
            'idle' 
             
        )

        this.props.opposingAction()
        
        console.log(`Critter jumped`);
        
    } // runHug
    
    critterClimbing = () => {

        this.props.updateAction( 
            
            availableActions.climbing.frame,
            availableActions.climbing.type,
            availableActions.climbing.wait,
            availableActions.climbing.afterFrame,
            'idle' 
             
        )

        this.props.opposingAction()
        
        console.log(`Critter jumped`);
        
    } // critterClimbing

    critterThrowStone = () => {

        this.props.updateAction( 
            
            availableActions.throwStone.frame,
            availableActions.throwStone.type,
            availableActions.throwStone.wait,
            availableActions.throwStone.afterFrame,
            'idle' 
             
        )

        this.props.opposingAction()
        
        console.log(`Critter jumped`);
        
    } // critterClimbing
    critterOneTwoCombo  = () => {

        this.props.updateAction( 
            
            availableActions.oneTwoCombo.frame,
            availableActions.oneTwoCombo.type,
            availableActions.oneTwoCombo.wait,
            availableActions.oneTwoCombo.afterFrame,
            'idle' 
             
        )

        this.props.opposingAction()
        
        console.log(`Critter jumped`);
        
    } // critterClimbing
  

    // This should render when someone loses fight
    critterKo = () => {

        // NOTE: this function is not configured,
        //       adjust settings as required.
        this.props.updateAction(
            
            '8', 
            'ko',  
            1600, 
            '4', 
            'idle'  

        )
        
        console.log(`Critter KO'd!`);
        
    } // critterKO

    // This should render when someone is hurt
    critterHurt = () => {

        this.props.updateAction(

            '4',
            'hurt',
            1600, 
            '4',
            'idle'

        )

        console.log(`Critter took damage`);

    } // critterHurt

    resetGame = () => {
            // const newOpposingUserScore = this.state.opposingUserScore;
            // const newCurrentUserScore = this.state.currentUserScore;
            // const newOpposingUserExp = this.state.opposingUserExp;
            // const newCurrentUserExp = this.state.currentUserExp;
            if (this.props.state.opposingUserExp === 0){
                const newCurrentUserScore = this.props.state.currentUserScore + 1;
                const newOpposingUserExp = 5;
                this.peops.setState({
                    currentUserScore: newCurrentUserScore,
                    opposingUserExp: newOpposingUserExp,
                    currentUserExp: 3
                })
            } else{
                const newOpposingUserScore = this.state.opposingUserScore +1;
                this.props.setState({
                    opposingUserScore: newOpposingUserScore,
                    currentUserExp: 3,
                    opposingUserExp: 3 
                })
            }
        
        }

    /* -------------------------------------- */
    render (){


        return(

            <div>
                
                <div id="game-buttons"
                className="critterButtonContainer">
                    {/* <button className="critterButton" 
                    onClick={this.critterJump}>
                        Jump
                    </button> */}
                    
                    {/* <button className="critterButton"
                    onClick={this.critterKo}>
                        K.O'd
                    </button> */}

                    <button id="left-button" className="critterButton" 
                    onClick={() => this.sendAction('runHug')}>
                        Left
                    </button>

                    <button id="down-button" className="critterButton" 
                    onClick={() => this.sendAction('throwStone')}>
                        Down
                    </button>

                    <button id="right-button" className="critterButton" 
                    onClick={() => this.sendAction('oneTwoCombo')}>
                        Right
                    </button>

                    {/* <button className="critterButton" 
                    onClick={this.critterHurt}>
                        Hurt
                    </button> */}

                    <button id="up-button" className="critterButton" 
                    onClick={() => this.sendAction('climbing')}>
                        Up
                    </button>


                </div>

            </div>
            
        );


    } // render


} // class Controls


export default FightControls;
