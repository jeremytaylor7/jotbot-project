import React, { Component } from 'react';





export default class Draft extends Component {
  render() {
    return (
      <div className="draft-container">
        <form className="draft-form">
          <textarea className="draft-input" />
        </form>
      </div>
    )
  }
}