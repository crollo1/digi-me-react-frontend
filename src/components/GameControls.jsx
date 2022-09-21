import React from 'react';


class GameControls extends React.Component {
    
    
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

    critterJump = () => {

        this.props.updateAction( 
            
            '8', 
            'jump',
            4800,  
            '4', 
            'idle' 
             
        )
        
        console.log(`Critter jumped`);
        
    } // critterJump


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





    critterWalk = () => {

        this.props.updateAction(

            '6',
            'walking',
            1600, 
            '6',
            'walking'

        )

        console.log(`Critter walking`);


    } // critterWalk


    critterSprint = () => {

        this.props.updateAction(

            '6',
            'sprint',
            3600, 
            '4',
            'idle',

        )

        console.log(`Critter sprinting`);

    } // critterStand



    // Set - orginal state
    critterStand = () => {

        this.props.updateAction(

            '4',
            'idle',
            800, 
            '4',
            'idle',

        )

        console.log(`Critter standing`);

    } // critterStand - 'idle'





    /* -------------------------------------- */
    render (){


        return(

            <div>
                
                <div className="critterButtonContainer">
                    <button className="critterButton" 
                    onClick={this.critterJump}>
                        Up
                    </button>
                    
                    <button className="critterButton"
                    onClick={this.critterKo}>
                        Down
                    </button>
                    
                    <button className="critterButton" 
                    onClick={this.critterSprint}>
                        Right
                    </button>

                    <button className="critterButton" 
                    onClick={this.critterWalk}>
                        Left
                    </button>                 


                </div>

            </div>
            
        );


    } // render


} // class Controls


export default GameControls;