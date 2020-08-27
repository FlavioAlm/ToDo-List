import React from 'react'
import './Task.css'

function Task (props) {

  return (
    <>
      <label className='taskContainer' tabIndex="0">{props.name}
        <input 
          id={props.id} 
          type="checkbox" 
          defaultChecked={props.completed}
          onChange={ () => props.toggleTaskCompleted(props.id)} />
        <span className="checkmark"></span>
        <button onClick={() => props.deleteTask(props.id)}>⌧</button>
      </label>
      <hr/>
    </>
  )
}

export default Task
