/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from './layout/Layout';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Layout />;
    </TaskProvider>
  );
}

export default App;
