import React, { Component } from 'react';

class Body extends Component {
    constructor ( props ) {
        super( props ) // inject props to send data to App for header
        // state 
        this.state = {
            currentUsername: 'None',
            usernames: []
        };
    }

    addUsername = () =>  {
        const usernameIn = document.getElementById( 'usernameIn' ).value;
        if (usernameIn === '') {
            alert('no empties')
        } else  {
            // this.state.test = usernameIn; -> this wont work
            // this.setState( { test: usernameIn});
            let usernames = this.state.usernames;
            usernames.push( usernameIn );
            this.setState( { usernames } );
            document.getElementById( 'usernameIn' ).value = '';
        }
        
        
    } //end function (function expressions auto-bind this method to the class. Then you won't have to 'bind' down below.)

    checkForDupe = ( event ) => {
        const newUserName = document.getElementById('usernameIn').value;
        document.getElementById( 'addUsernameButton').disabled = this.state.usernames.includes (newUserName); 

    }

    selectUsername = (user) => {
        this.setState( { currentUsername: user } );
        this.props.setHeaderUsername( user );
        console.log('check', user);
    }
    render() {
        //use map to map this.state.usenames to li elements
        const users =  this.state.usernames.map(
            ( user ) =>  
                <li key={ user.toString() } onClick={ () => this.selectUsername( user ) }> 
                { user }
                </li>
        );//end map
        return (
            <div>
                <h1> Add Username </h1>
                <p> Current user name is { this.state.currentUsername }  </p>
                <input type="text" placeholder="username" id="usernameIn" onChange={ this.checkForDupe }></input> 
                <button onClick={ this.addUsername } id="addUsernameButton"> Add Username </button>
                <ul> 
                { users }
                </ul>
            </div>
        ); //end return 
    } // end render
} // end component

export default Body; 