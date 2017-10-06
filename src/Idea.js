import React from 'react'

export default function Idea(props) {
  return (
    <div className="idea">
      <h2 className="idea-title">{props.title}</h2>
      <h2 className="idea-info">{props.info}</h2>
      <a href="#">Add Sub-Idea</a>
      <a href="#">View Sub-Ideas</a>
    </div>
  )
}