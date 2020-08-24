import React, { useState } from 'react'
import './Form.css'

function Form (props) { 
  const [taskName, setTaskName] = useState('');

  function handleChange(e) {
    let taskName = e.target.value;
    setTaskName(taskName);
    console.log(taskName);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(taskName);
    setTaskName("");
  }

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <input
        key="1"
        type='text' 
        placeholder="Your new task"
        id="1"
        value={taskName}
        onChange={handleChange}
      />
      <button type='submit' value="ADD">ADD</button>
    </form>
  );
}

export default Form