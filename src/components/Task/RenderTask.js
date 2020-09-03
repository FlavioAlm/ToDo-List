import React from 'react'
import './Task.css'

const RenderTask = ({
  key, 
  id,
  name, 
  completed, 
  toggleTaskCompleted, 
  deleteTask
}) =>

  <>
    <article className='taskContainer' tabIndex="0">{name}
      <input
        id={id} 
        type="checkbox" 
        name={name} 
        defaultChecked={completed}
        onChange={ () => toggleTaskCompleted(id)}
      />
      <span className="checkmark"></span>
      <button onClick={() => deleteTask(id)}>⌧</button>
    </article>
    <hr/>
  </>

export default RenderTask