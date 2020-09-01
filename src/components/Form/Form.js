import React, { useState } from 'react'
import './Form.css'

function Form (props) { 
  const [taskName, setTaskName] = useState('');

  function handleChange(e) {
    let taskName = e.target.value;
    setTaskName(taskName);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName === null) return
    if (taskName !== '') {
      props.addTask(taskName);
      setTaskName("");
    }
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <input
        type='text' 
        placeholder="Your new task"
        value={taskName}
        onChange={handleChange}
      />
      <button type='submit' value="ADD">ADD</button>
    </form>
  );
}

export default Form