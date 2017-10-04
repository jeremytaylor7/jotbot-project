import React, { Component } from 'react';
import Nav from './Nav.js'
import Draft from './Draft.js'
import Intro from './Intro.js'
import './Nav.css'
import './App.css'
import './Draft.css'
import './Intro.css'


class App extends Component {


  strikeThrough() {
    alert('it works!');
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Draft onClick={() => { this.strikeThrough() }} />
      </div>
    );
  }
}

export default App;

//testapp