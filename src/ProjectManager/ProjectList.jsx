import React, { useContext, useState } from 'react';
import Project from './Project';
import { SvgSort } from '../assets/SvgIcon';
import { ProjectContext } from '../context/ProjectContext';

function ProjectList({ category, openModal, searchTerm }) {
  const { state } = useContext(ProjectContext);
  const [isAscending, setIsAscending] = useState(true);
  const filteredTask = state.tasks
    .filter((task) => task.category === category)
    .filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
  function handleSortToggle() {
    setIsAscending(!isAscending);
  }
  const categoryColors = {
    'To-Do': 'bg-indigo-600',
    'In Progress': 'bg-yellow-500',
    Done: 'bg-teal-500',
    Revise: 'bg-rose-500',
  };
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div
        className={`${categoryColors[category] || 'bg-gray-600'}
       rounded-lg p-4`}
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {category} ({state.tasks.length})
          </h3>
          <button onClick={handleSortToggle} aria-label="Sort by Date">
            <SvgSort />
          </button>
        </div>
        <div className="mb-4 rounded-lg bg-gray-800 p-4">
          {filteredTask.length > 0 ? (
            filteredTask.map((task) => {
              return (
                <Project openModal={openModal} key={task.id} task={task} />
              );
            })
          ) : (
            <p className="text-center text-gray-400">No List is Added</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
