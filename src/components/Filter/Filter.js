import React from 'react'
import './Filter.css'

const FILTER_MAP = {
  Todo: task => !task.completed,
  Done: task => task.completed,
  All: () => true,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Filter = ({filter, setFilter}) =>
  FILTER_NAMES.map(name => 
    <button
      key={name}
      type="button"
      className="filterButton"
      name={name}
      aria-pressed={name===filter}
      onClick={()=> setFilter(name)}
    >
      {name}
    </button>
  )

export default Filter