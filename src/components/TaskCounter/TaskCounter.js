import React from 'react'

import './TaskCounter.css'

const TASK_HEAD = {
  Todo: "Todo",
  Done: "Done",
  All: "In general",
}

function TaskCounter({taskListLength, filter}) {

  const taskNoum = (taskListLength) > 1 ? "tasks" : "task" 

  return (
    <h2 className="list-heading" tabIndex="-1">
      {`${taskListLength} ${taskNoum} ${TASK_HEAD[filter].toLowerCase()}`}
    </h2>
  )
}

export default TaskCounter
