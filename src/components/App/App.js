import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import Header from '../Header/Header';
import Body from '../Body/Body'; 
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Body />
        <Footer />
      </div>
    );
  } //end render -> method to render onto the DOM 
}

export default App;
