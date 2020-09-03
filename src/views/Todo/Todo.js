import { nanoid } from "nanoid"

import React, { useState } from 'react'

import { Filter, Form, Task } from '../../components'
import { Header } from '../../views'
import './Todo.css'

const FILTER_MAP = {
  Todo: task => !task.completed,
  Done: task => task.completed,
  All: () => true,
}

function Todo({INITIAL_DATA}) {
  const [tasks, setTasks] = useState(INITIAL_DATA)
  const [filter, setFilter] = useState("Todo")

  function addTask(taskName) {
    const newTask = { id: "todo-"+nanoid(), name: taskName, completed: false }
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(taskId){
    const updatedTasks = tasks.map(task => {
      if (taskId === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(taskId) {
    const remainingTasks = tasks.filter(task => taskId !== task.id)
    setTasks(remainingTasks)
  }

  return (
    <main className="App">
      <Header />
      <Form addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <Task 
        tasks={tasks} 
        FILTER_MAP={FILTER_MAP} 
        filter={filter}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}  
      />
    </main>
  )
}

export default Todo;