import React from 'react';


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

    // critterJump = () => {

    //     this.props.updateAction( 
            
    //         '8', 
    //         'jump',
    //         4800,  
    //         '4', 
    //         'idle' 
             
    //     )
        
    //     console.log(`Critter jumped`);
        
    // } // critterJump




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





    // critterWalkPunch = () => {
        
    //     this.props.updateAction(
            
    //         '6',
    //         'walkPunchWalk',
    //         3800, 
    //         '4',
    //         'idle'            

    //     )
        
    //     console.log(`Critter walked and punched!`);
        
    // } // critterWalkPunchWalk


    // critterWalk = () => {

    //     this.props.updateAction(

    //         '6',
    //         'walking',
    //         1600, 
    //         '6',
    //         'walking'

    //     )

    //     console.log(`Critter walking`);


    // } // critterWalk


    // critterSprint = () => {

    //     this.props.updateAction(

    //         '6',
    //         'sprint',
    //         3600, 
    //         '4',
    //         'idle',

    //     )

    //     console.log(`Critter sprinting`);

    // } // critterStand


    critterRunHug = () => {

        this.props.updateAction(

            '6',
            'runHug',
            3600, 
            '4',
            'idle',

        )

        console.log(`Critter coming for creepy hug`);

    } // critterRunHug


    critterOneTwoCombo = () => {

        this.props.updateAction(

            '6',
            'oneTwoCombo',
            1600, 
            '4',
            'idle',

        )

        console.log(`Critter one two punched`);

    } // critterOneTwoCombo

    
    critterThrowStone = () => {

        this.props.updateAction(

            '4',
            'throwStone',
            800, 
            '4',
            'idle',

        )

        console.log(`Critter threw a stone`);

    } // critterThrowStone

    
    // critterStand = () => {

    //     this.props.updateAction(

    //         '4',
    //         'idle',
    //         800, 
    //         '4',
    //         'idle',

    //     )

    //     console.log(`Critter standing`);

    // } // critterStand - 'idle'


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


    critterClimbing = () => {

        this.props.updateAction(

            '4',
            'climbing',
            3600, 
            '4',
            'idle',

        )

        console.log(`Critter climbing`);

    } // critterClimbing


    // critterPunch = () => {

    //     this.props.updateAction(

    //         '4',
    //         'punch',
    //         1600, 
    //         '4',
    //         'idle',

    //     )

    //     console.log(`Critter punched!`);

    // } // critterPunch



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
                    
                    {/* <button className="critterButton" 
                    onClick={this.critterWalkPunch}>
                        Punch-walk
                    </button> */}

                    {/* <button className="critterButton" 
                    onClick={this.critterWalk}>
                        Walk
                    </button> */}
                    
                    {/* <button className="critterButton" 
                    onClick={this.critterSprint}>
                        Sprint
                    </button> */}

                    <button className="critterButton" 
                    onClick={this.critterRunHug}>
                        Left
                    </button>

                    <button className="critterButton" 
                    onClick={this.critterOneTwoCombo}>
                        Down
                    </button>

                    <button className="critterButton" 
                    onClick={this.critterThrowStone}>
                        Right
                    </button>

                    {/* <button className="critterButton" 
                    onClick={this.critterStand}>
                        Stand
                    </button> */}

                    {/* <button className="critterButton" 
                    onClick={this.critterHurt}>
                        Hurt
                    </button> */}

                    <button className="critterButton" 
                    onClick={this.critterClimbing}>
                        Up
                    </button>

                    {/* <button className="critterButton" 
                    onClick={this.critterPunch}>
                        Punch
                    </button> */}

                </div>

            </div>
            
        );


    } // render


} // class Controls


export default FightControls;