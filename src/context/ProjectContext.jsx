import { createContext, useReducer } from 'react';
export const ProjectContext = createContext();

const initialState = {
  tasks: [],
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
}

function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
