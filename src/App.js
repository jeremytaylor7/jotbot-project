import React, { Component } from 'react';
import Nav from './Nav.js'
import Intro from './Intro.js'
import IdeaBoard from './IdeaBoard.js'
import './Nav.css'
import './App.css'
import './Intro.css'
import './IdeaBoard.css'
import './Buttons.css'
import './IdeaForm.css'
import './SubIdeaForm.css'
import './Idea.css'
import './List.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.keyPress = this.keyPress.bind(this);
    this.state = {
      input: 'Hey',
      inputList: ['Hey', 'There']
    }
  }

  keyPress(e) {
    alert('HEY!')
  }

  strikeThrough() {
    const selection = window.getSelection().toString();
    console.log(selection);
  }

  textChange(e) {
    console.log(e);
    const str = e.target.value;
    const strArray = str.split(' ');
    this.setState({ inputList: strArray });
    const joinedStr = strArray.join(' ');

    this.setState({ inputList: strArray });
    this.setState({ input: joinedStr });
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <IdeaBoard />
      </div>
    );
  }
}

export default App;

//testapp