import React from 'react';

export default function Intro(props) {
  return (
    <div className="intro-class">
      <h2 className="intro-h2">Welcome {props.user}</h2>
      <h3 className="intro-h3">Ideas: {props.ideas}</h3>
    </div>
  )
}