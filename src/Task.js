import React from 'react'
import './Task.css'

const Task = (props) => {
  return (
    <div className='Task'>
      <input id={props.id} type="checkbox" defaultChecked={props.completed} />
      <label tabIndex="0">{props.name}</label>
      <button>X</button>
    </div>
  )
}

export default Task
