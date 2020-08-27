import React from 'react'
import './Filter.css'

function Filter (props) {
  return (
    <button className="filterButton" onClick={()=>props.setFilter(props.name)}>{props.name}</button> 
  )
}

export default Filter