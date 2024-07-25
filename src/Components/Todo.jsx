import React from 'react';
import './style.css'; // Make sure to import your CSS file

export default function Todo({ todoList, onComplete }) {
  return (
    <div>
      <h2>To-Do</h2>
      <ul>
        {todoList.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="complete" onClick={() => onComplete(index)}>Mark Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
