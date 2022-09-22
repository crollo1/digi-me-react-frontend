import React from 'react';

const availableActions = {
    runHug: {
        frame: '6',
        type: 'runHug',
        wait: 3600,
        afterFrame: '4',
        damage: 1,
    },
    climbing: {
        frame: '4',
        type: 'climbing',
        wait: 3600,
        afterFrame: '4',
        damage: 1,
    },
    throwStone: {
        frame: '4',
        type: 'throwStone',
        wait: 800,
        afterFrame: '4',
        damage: 1,
    }, 
    oneTwoCombo: {
        frame: '6',
        type: 'oneTwoCombo',
        wait: 1600,
        afterFrame: '4',
        damage: 1, 
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
            
            availableActions.runhug.frame,
            availableActions.runhug.type,
            availableActions.runhug.wait,
            availableActions.runhug.afterFrame,
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
            
            availableActions.throwstone.frame,
            availableActions.throwstone.type,
            availableActions.throwstone.wait,
            availableActions.throwstone.afterFrame,
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

    /* -------------------------------------- */
    render (){


        return(

            <div>
                
                <div className="critterButtonContainer">
                    {/* <button className="critterButton" 
                    onClick={this.critterJump}>
                        Jump
                    </button> */}
                    
                    {/* <button className="critterButton"
                    onClick={this.critterKo}>
                        K.O'd
                    </button> */}

                    <button className="critterButton1" 
                    onClick={() => this.sendAction('runHug')}>
                        Left
                    </button>

                    <button className="critterButton2" 
                    onClick={() => this.sendAction('throwStone')}>
                        Down
                    </button>

                    <button className="critterButton3" 
                    onClick={() => this.sendAction('oneTwoCombo')}>
                        Right
                    </button>

                    {/* <button className="critterButton" 
                    onClick={this.critterHurt}>
                        Hurt
                    </button> */}

                    <button className="critterButton4" 
                    onClick={() => this.sendAction('climbing')}>
                        Up
                    </button>


                </div>

            </div>
            
        );


    } // render


} // class Controls


export default FightControls;
