import React from 'react'

import './Task.css'
import RenderTask from './RenderTask'
import { TaskCounter } from '../../components'

function Task ({
  tasks, 
  FILTER_MAP, 
  filter, 
  toggleTaskCompleted,
  deleteTask, 
}) {

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map( task => (
      <RenderTask
        key={task.id} 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask} 
      />
    ));

  return (
    <>
      <TaskCounter taskListLength={taskList.length} filter={filter} />
      <hr/>
      {taskList}
    </>
  )
}

export default Task