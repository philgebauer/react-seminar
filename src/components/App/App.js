import React, { Component } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body'; 
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  constructor (props){ //inject props to use accross components
    super(props)
    // state for app component
    this.state = {
      username: ''
    } //end state
  } // end constructor 

  setHeaderUsername = ( user ) => {
    this.setState ({username: user})
  }

  render() {
    return (
      <div className="App">
        <Header selectedUsername = {this.state.username} /> 
        <Body setHeaderUsername = {this.setHeaderUsername}/>
        <Footer />
      </div>
    );
  } //end render -> method to render onto the DOM 
}

export default App;
