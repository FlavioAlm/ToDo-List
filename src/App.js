import React, { useState } from 'react'
import Form from './Form'
import Task from './Task'
import Filter from './Filter'
import { nanoid } from "nanoid"

import './App.css'
import './Filter.css'

const FILTER_MAP = {
  Todo: task => !task.completed,
  Done: task => task.completed,
  All: () => true,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("Todo");

  function addTask(taskName) {
    const newTask = { id: "todo-"+nanoid(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  function deleteTask(taskId) {
    const remainingTasks = tasks.filter( task => taskId !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map( task => (
    <Task
      key={task.id} 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask} 
    />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <Filter
      key={name}
      name={name}
      setFilter={setFilter}
    />
  ))

  return (
    <div className="App">
      <h1>Just TODO it [✔] </h1>
      <Form 
        className="Form"
        addTask={addTask} 
        id={props.id}
      />
      <div className="filter">
        {filterList}
      </div>

      <h2 id="list-heading" tabIndex="-1">{`${taskList.length} tasks remaining`}</h2>
      <hr/>
      {taskList}
    </div>
  );
}

export default App;
