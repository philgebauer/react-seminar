import React, { Component } from 'react';

class Body extends Component {
    constructor () {
        super()
        // state 
        this.state = {
            usernames : [] 
        };
    }

    addUsername = () =>  {
        const usernameIn = document.getElementById( 'usernameIn' ).value;
        // this.state.test = usernameIn; -> this wont work
        // this.setState( { test: usernameIn});
        let usernames = this.state.usernames;
        usernames.push( usernameIn );
        this.setState( { usernames } );
        
    } //end function (function expressions auto-bind this method to the class. Then you won't have to 'bind' down below.)
    render() {
        //use map to map this.state.usenames to li elements
        const users =  this.state.usernames.map(
            ( user ) =>  
                <li key={ user.toString() }> 
                { user }
                </li>
        );//end map
        return (
            <div>
                <h1> Add Username </h1>
                <input type="text" placeholder="username" id="usernameIn"></input> 
                <button onClick={ this.addUsername }> Add Username </button>
                <ul> 
                { users }
                </ul>
            </div>
        ); //end return 
    } // end render
} // end component

export default Body; 