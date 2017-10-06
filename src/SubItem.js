import React from 'react'

export default function SubItem(props) {
  return (
    <div className="subitem">
      <h3 className="subitem-title">{props.subItemTitle}</h3>
      <h3 className="subitem-info">{props.subItemInfo}</h3>
    </div>
  )
}