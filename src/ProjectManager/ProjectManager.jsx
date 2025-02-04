import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProjectList from './ProjectList';
import ProjectModal from './ProjectModal';
function ProjectManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableTask, setEditableTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['To-Do', 'In Progress', 'Done', 'Revise'];
  function openModal(task = null) {
    setEditableTask(task);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 relative">
      <Header onSearch={setSearchTerm} />
      <main className=" bg-slate-900 flex-grow">
        <div className="container">
          <div className="flex items-center justify-between my-4 ">
            <h4 className="text-white text-xl font-semibold capitalize">
              Action
            </h4>
            <button
              onClick={() => openModal()}
              className="bg-gray-300 text-black font-base text-sm capitalize py-2 px-3 rounded-sm"
            >
              Add+
            </button>
          </div>
          <div className="-mx-2 mb-6 flex flex-wrap">
            {categories.map((category) => {
              return (
                <ProjectList
                  searchTerm={searchTerm}
                  key={category}
                  category={category}
                  openModal={openModal}
                />
              );
            })}
          </div>
          {isModalOpen && (
            <ProjectModal
              isOpen={isModalOpen}
              onCloseModal={handleCloseModal}
              editableTask={editableTask}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectManager;
