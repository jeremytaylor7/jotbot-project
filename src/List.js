import React from 'react'
import ListItem from './ListItem.js'
import SubItem from './SubItem.js'
import './ListItem.css'
import './SubItem.css'


export default function List(props) {
  return (
    <div className="list">
      <h2 className="list-title">{props.listTitle}</h2>
      <div className="list-container">
        <ListItem listItemTitle="Flying Car" listItemInfo="How to build a flying car!" />
        <SubItem subItemTitle="Chocolate Electric Fan" subItemInfo="Huh?" />
      </div>
    </div>
  )
}