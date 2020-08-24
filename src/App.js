import React, { useState } from 'react'
import './App.css'
import Form from './Form'
import Task from './Task'
import { nanoid } from "nanoid"

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(taskName) {
    const newTask = { id: "todo-"+nanoid(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks.map( task => (
     <Task id={task.id} name={task.name} completed={task.completed} /> 
  ));

  return (
    <div className="App">
      <h1>Just TODO it [✔] </h1>
      <Form 
        className="Form"
        addTask={addTask} 
        id={props.id}
      />
      <h2 id="list-heading" tabIndex="-1">{`${tasks.length} tasks remaining`}</h2>
      {taskList}
    </div>
  );
}

export default App;
