import React, { Component } from 'react';
import Nav from './Nav.js'
import Draft from './Draft.js'
import './Nav.css'
import './App.css'
import './Draft.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Draft />
      </div>
    );
  }
}

export default App;

//testapp