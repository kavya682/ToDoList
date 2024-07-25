import React, { useState } from 'react';
import Completed from './Completed';
import Todo from './Todo';
import './style.css';  // Import the CSS file

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [compList, setCompList] = useState([]);
  const [task, setTask] = useState('');

  function handleOnChange(e) {
    setTask(e.target.value);
  }

  function handleOnClick() {
    if (task) {
      setTodoList([...todoList, task]);
      setTask('');
    }
  }

  function handleTaskComplete(index) {
    const completedTask = todoList.splice(index, 1);
    setCompList([...compList, ...completedTask]);
    setTodoList([...todoList]);
  }

  return (
    <>
      <h1>My To-Do List</h1>
      <input type='text' value={task} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Add Task</button>

      <Todo todoList={todoList} onComplete={handleTaskComplete} />
      <Completed compList={compList} />
    </>
  );
}
