import React, { useState } from 'react'
import './Form.css'

function Form ({addTask}) { 
  const [taskName, setTaskName] = useState('')

  function handleChange(e) {
    setTaskName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (taskName !== '') {
      addTask(taskName)
      setTaskName("")
    }
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <input
        type='text' 
        placeholder="Your new task"
        value={taskName}
        onChange={handleChange}
        required
      />
      <button type='submit' value="ADD">ADD</button>
    </form>
  )
}

export default Form