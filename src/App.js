import React from 'react';
import './App.css'
import Form from './Form'
import Task from './Task'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{id:0, value: 0, isCompleted: false, isVisible: false }]
    }
  }

  handleSubmit(e) {
    console.log("submitted!")
  }

  render(){
    return (
      <div className="App">
        <h1>My ToDo-List</h1>
        <Form 
          className="Form" 
          id={this.state.items.id}
          onSubmit={this.handleSubmit}
        />
        <Task />
      </div>
    );
  }
}

export default App;
