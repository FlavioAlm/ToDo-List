import React from 'react'
import './Form.css'

const Form = (props) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <input
      key="1"
      type='text' 
      placeholder="New task"
      id="1"
    />
    <input type='submit' value="Add"/>
  </form>
)

export default Form