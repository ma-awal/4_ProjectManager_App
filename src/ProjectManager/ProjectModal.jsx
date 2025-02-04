import React, { useContext, useState } from 'react';
import { ProjectContext } from '../context/ProjectContext';

function ProjectModal({ onCloseModal, editableTask, isOpen }) {
  const { dispatch } = useContext(ProjectContext);

  const [taskData, setTaskData] = useState(() => ({
    id: null,
    name: '',
    description: '',
    date: '',
    category: '',
  }));
  if (editableTask && editableTask.id !== taskData.id) {
    setTaskData(editableTask);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !taskData.name ||
      !taskData.description ||
      !taskData.date ||
      !taskData.category
    ) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    if (editableTask) {
      dispatch({ type: 'EDIT_TASK', payload: taskData });
    } else {
      dispatch({
        type: 'ADD_TASK',
        payload: { ...taskData, id: Date.now() },
      });
    }

    onCloseModal();
  }

  return (
    <div className="flex min-h-screen absolute top-0 left-0 right-0 items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            {editableTask ? 'Edit taskData' : 'Create taskData'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                taskData Name
              </label>
              <input
                type="text"
                id="name"
                value={taskData.name}
                onChange={(e) =>
                  setTaskData({ ...taskData, name: e.target.value })
                }
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                value={taskData.description}
                onChange={(e) =>
                  setTaskData({ ...taskData, description: e.target.value })
                }
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="date"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="date"
                value={taskData.date}
                onChange={(e) =>
                  setTaskData({ ...taskData, date: e.target.value })
                }
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                value={taskData.category}
                onChange={(e) =>
                  setTaskData({ ...taskData, category: e.target.value })
                }
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a category</option>
                {['To-Do', 'In Progress', 'Done', 'Revise'].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={onCloseModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {editableTask ? 'Update taskData' : 'Create taskData'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
