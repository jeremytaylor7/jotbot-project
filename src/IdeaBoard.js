import React from 'react';
import Intro from './Intro.js'
import Buttons from './Buttons.js'
import IdeaForm from './IdeaForm.js'
import SubIdeaForm from './SubIdeaForm.js'
import Idea from './Idea'
import List from './List'
import './Intro.css'
import './Buttons.css'
import './IdeaForm.css'
import './SubIdeaForm.css'
import './Idea.css'
import './List.css'





export default function IdeaBoard(props) {


  return (
    <div className="idea-container">
      <Intro user="Jeremy" ideas={5} />
      <Buttons />
      <IdeaForm />
      <SubIdeaForm />
      <Idea title="Flying Car" info="This is an Idea of flying cars!?" />
      <List listTitle="Ideas/SubIdeas" />


    </div >

  )
}
