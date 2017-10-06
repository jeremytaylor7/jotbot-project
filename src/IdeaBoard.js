import React from 'react';





export default function Draft(props) {


  const words = props.text.map(item => {
    return <span contentEditable="true" className="word" onKeyDown={(e) => { props.onKeyPress(e) }} tabIndex="0">{item}</span>
  })

  return (
    <div className="idea-container">
      <form className="idea-form">


        <button className="clear-btn" value="Clear">Create</button>
        <button className="finalize-btn" value="Finalize">Cancel</button>
      </form>
    </div >

  )
}
