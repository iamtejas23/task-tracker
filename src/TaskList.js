// TaskList.js
import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask, toggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          <div>
            <button onClick={() => updateTask(task.id, { text: prompt('Edit task:', task.text) || task.text })}>
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
