import React from 'react'

import './Task.css'
import RenderTask from './RenderTask'

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
      <h2 id="list-heading" tabIndex="-1">
        {`${taskList.length} tasks remaining`}
      </h2>
      <hr/>
      {taskList}
    </>
  )
}

export default Task
