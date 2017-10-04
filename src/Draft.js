import React from 'react';





export default function Draft(props) {
  return (
    <div className="draft-container">
      <form className="draft-form">
        <textarea onClick={() => { props.onClick() }} className="draft-input" />
        <button className="clear-btn" value="Clear">Clear</button>
        <button className="finalize-btn" value="Finalize">Finalize</button>
      </form>
    </div >

  )
}
