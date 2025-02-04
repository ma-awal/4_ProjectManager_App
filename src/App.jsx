/* eslint-disable no-unused-vars */
import React from 'react';

import ProjectProvider from './context/ProjectContext';
import ProjectManager from './ProjectManager/ProjectManager';

function App() {
  return (
    <ProjectProvider>
      <ProjectManager />
    </ProjectProvider>
  );
}

export default App;
