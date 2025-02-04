import React, { useContext, useState } from 'react';
import { SvgEdit, SvgDelete } from '../assets/SvgIcon';
import { ProjectContext } from '../context/ProjectContext';

function Project({ task, openModal }) {
  const { dispatch } = useContext(ProjectContext);
  function handleDelete() {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  }
  return (
    <>
      <div className="flex justify-between">
        <h4 className="mb-2 items-center flex-1 font-semibold text-indigo-500">
          {task.name}
        </h4>

        <div className="flex   gap-2">
          <button onClick={() => openModal(task)}>
            <SvgEdit />
          </button>
          <button onClick={handleDelete}>
            <SvgDelete />
          </button>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>
      <p className="mt-6 text-xs text-zinc-400">{task.date}</p>
    </>
  );
}

export default Project;
