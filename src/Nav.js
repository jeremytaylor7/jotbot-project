import React, { Component } from 'react';



export default class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-bar">
        <ul className="nav-list">
          <li>Home </li>
          <li>Log in</li>
          <li>Log out</li>
          <li>Add Draft</li>
        </ul>
      </div>
    )
  }
}