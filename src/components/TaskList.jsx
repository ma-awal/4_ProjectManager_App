import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import Task from './Task';
import { SvgSort } from '../assets/SvgIcon';

function TaskList({ category, searchTerm, openModal }) {
  const { state } = useTaskContext();
  const [isAscending, setIsAscending] = useState(true);

  const categoryColors = {
    'To-Do': 'bg-indigo-600',
    'In Progress': 'bg-yellow-500',
    Done: 'bg-teal-500',
    Revise: 'bg-rose-500',
  };

  const tasks = state.task
    .filter((task) => task.category === category)
    .filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return isAscending ? dateA - dateB : dateB - dateA;
    });

  const handleSortToggle = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div
        className={`${
          categoryColors[category] || 'bg-gray-600'
        } rounded-lg p-4`}
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {category} ({tasks.length})
          </h3>
          <button onClick={handleSortToggle} aria-label="Sort by Date">
            <SvgSort />
          </button>
        </div>
        <div className="mb-4 rounded-lg bg-gray-800 p-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task key={task.id} task={task} openModal={openModal} />
            ))
          ) : (
            <p className="text-center text-gray-400">No tasks found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
