import React from 'react';

export default function Completed({ compList }) {
  return (
    <div>
      <h2>Completed</h2>
      <ul>
        {compList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
