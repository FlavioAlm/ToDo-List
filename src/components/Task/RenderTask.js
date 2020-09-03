import React from 'react'
import './Task.css'

const RenderTask = ({
  name, 
  id, 
  completed, 
  toggleTaskCompleted, 
  deleteTask
}) =>

  <>
    <article className='taskContainer' tabIndex="0">
      {name}
      <input 
        id={id} 
        type="checkbox" 
        defaultChecked={completed}
        onChange={ () => toggleTaskCompleted(id)} />
      <span className="checkmark"></span>
      <button onClick={() => deleteTask(id)}>⌧</button>
    </article>
    <hr/>
  </>

export default RenderTask