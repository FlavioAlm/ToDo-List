import React from 'react'
import './Task.css'

const Task = (props) => {
  return (
    <div className='Task'>
      <input id={props.id} type="checkbox" defaultChecked={props.completed} />
      <label>{props.name}</label>
      <button>X</button>
    </div>
  )
}

export default Task
