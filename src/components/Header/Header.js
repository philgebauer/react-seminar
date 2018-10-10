import React, { Component } from 'react';

class Header extends Component {
    constructor (props){
        super(props)

        this.state = {
            selectedUsername : 'HeaderUsername'
        }
      }

      componentDidMount() { // kind of like document.ready in jquery. Good spot to make an API call

      }

    render () {
        return(
            <div className="App-header"> 
                <h1> New Header </h1>
                <p> Selected Username is {this.props.selectedUsername} </p>
            </div>
        ); // end JSX
    } // end render
} // end class

export default Header;
