import React from 'react'
import './Form.css'

const Form = () => (
  <form className='Form'>
    <input type='text' placeholder="New task" />
    <input type='submit' value="Add"/>
  </form>
)

export default Form