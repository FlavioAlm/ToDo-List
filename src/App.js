import React, { useState } from 'react'
import './App.css'
import Form from './Form'
import Task from './Task'
import Filter from './Filter'
import { nanoid } from "nanoid"

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(taskName) {
    const newTask = { id: "todo-"+nanoid(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    const remainingTasks = tasks.filter( task => taskId !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map( task => (
     <Task
      key={task.id} 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      deleteTask={deleteTask} /> 
  ));

  return (
    <div className="App">
      <h1>Just TODO it [✔] </h1>
      <Form 
        className="Form"
        addTask={addTask} 
        id={props.id}
      />
      <Filter />
      <h2 id="list-heading" tabIndex="-1">{`${tasks.length} tasks remaining`}</h2>
      {taskList}
    </div>
  );
}

export default App;
