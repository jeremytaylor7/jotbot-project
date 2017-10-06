import React from 'react'

export default function ListItem(props) {
  return (
    <div className="list-item">
      <h3 className="list-item-title">Idea: {props.listItemTitle}</h3>
      <h3 className="list-item-info">Info: {props.listItemInfo}</h3>
    </div>
  )
}