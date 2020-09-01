import React, { useState } from 'react'

import Form from '../components/Form/Form'
import Task from '../components/Task/Task'
import Filter from '../components/Filter/Filter'

import { nanoid } from "nanoid"

import './App.css'
import '../components/Filter/Filter.css'

const FILTER_MAP = {
  Todo: task => !task.completed,
  Done: task => task.completed,
  All: () => true,
};

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

  return (
    <div className="App">
      <h1>Just TODO it [✔] </h1>
      <Form 
        className="Form"
        addTask={addTask} 
        id={props.id}
      />
      <div className="filter">
        <Filter filter={filter} setFilter={setFilter}/>
      </div>

      <h2 id="list-heading" tabIndex="-1">{`${taskList.length} tasks remaining`}</h2>
      <hr/>
      {taskList}
    </div>
  );
}

export default App;
