import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const INITIAL_DATA = [
  { id: "todo-0", name: "Run", completed: true },
  { id: "todo-1", name: "Code", completed: false },
  { id: "todo-2", name: "Lunch", completed: false }
];

ReactDOM.render(<App tasks={INITIAL_DATA} />, document.getElementById('root'));

