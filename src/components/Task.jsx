import React from 'react';
import { SvgDelete, SvgEdit } from '../assets/SvgIcon';
import { useTaskContext } from '../context/TaskContext';

function Task({ task, openModal }) {
  const { dispatch } = useTaskContext();
  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };
  return (
    <>
      <div className="flex justify-between">
        <h4 className="mb-2 items-center flex-1 font-semibold text-indigo-500">
          {task.name}
        </h4>

        <div className="flex   gap-2">
          <div onClick={() => openModal(task)}>
            <SvgEdit />
          </div>
          <div onClick={handleDelete}>
            <SvgDelete />
          </div>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>
      <p className="mt-6 text-xs text-zinc-400"> {task.date}</p>
    </>
  );
}

export default Task;
