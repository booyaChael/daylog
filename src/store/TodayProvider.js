import TodayContext from "./today-context";
import { useReducer } from "react";

const defaultTodayState = {
  projects: [],
  totalTime: 0,
};

const todayReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingProjectIndex = state.projects.findIndex(
      (project) => project.id === action.project.id
    );
    console.log(existingProjectIndex);
    const existingProject = state.projects[existingProjectIndex];
    console.log(existingProject);
    let updatedProjects;
    if (existingProjectIndex >= 0) {
      console.log(action.project);
      const updatedProject = {
        ...existingProject,
        time: existingProject.time + action.project.time,
      };
      updatedProjects = state.projects;
      updatedProjects[existingProjectIndex] = updatedProject;
    } else {
      updatedProjects = state.projects.concat(action.project);
    }
    const updatedTime = state.totalTime + action.project.time;
    console.log(updatedProjects);
    return {
      projects: updatedProjects,
      totalTime: updatedTime,
    };
  }
};

const TodayProvider = (props) => {
  const [todayState, dispatchTodayAction] = useReducer(
    todayReducer,
    defaultTodayState
  );
  const addProjectHandler = (project) => {
    dispatchTodayAction({ type: "ADD", project });
  };
  const removeProjectHandler = () => {};

  const todayContext = {
    projects: todayState.projects,
    totalTime: todayState.totalTime,
    addProject: addProjectHandler,
    removeProject: removeProjectHandler,
  };

  return (
    <TodayContext.Provider value={todayContext}>
      {props.children}
    </TodayContext.Provider>
  );
};

export default TodayProvider;
