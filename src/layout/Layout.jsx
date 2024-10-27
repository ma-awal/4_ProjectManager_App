// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import { SvgAdd } from '../assets/SvgIcon';
function Layout() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editableTask, setEditableTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['To-Do', 'In Progress', 'Done', 'Revise'];
  const openModal = (task = null) => {
    setEditableTask(task);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  return (
    <div className="flex h-screen">
      <Aside />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header onSearch={setSearchTerm} />
        <div className="mx-auto max-w-7xl p-6">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Projectify</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => openModal()}
                  className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                >
                  <SvgAdd />
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="-mx-2 mb-6 flex flex-wrap">
            {categories.map((category) => {
              return (
                <TaskList
                  searchTerm={searchTerm}
                  key={category}
                  category={category}
                  openModal={openModal}
                />
              );
            })}
            {isModalOpen && (
              <TaskModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                editableTask={editableTask}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
