import TodayContext from "./today-context";
import { useReducer, useEffect } from "react";

const defaultTodayState = JSON.parse(localStorage.getItem("todayData"));
const todayReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingProjectIndex = state.projects.findIndex(
      (project) => project.id === action.project.id
    );
    let updatedProjects;
    const updatedTime = state.totalTime + action.project.time;
    if (existingProjectIndex !== -1) {
      const existingProject = state.projects[existingProjectIndex];
      const updatedProject = {
        ...existingProject,
        time: existingProject.time + action.project.time,
      };
      updatedProjects = [...state.projects];
      updatedProjects[existingProjectIndex] = updatedProject;
    } else {
      updatedProjects = state.projects.concat(action.project);
    }

    return {
      projects: updatedProjects,
      totalTime: updatedTime,
    };
  }

  if (action.type === "REMOVE") {
    const existingProjectIndex = state.projects.findIndex(
      (project) => project.id === action.project.id
    );
    const existingProject = state.projects[existingProjectIndex];
    let updatedProjects;
    if (existingProject.time === 1) {
      updatedProjects = state.items.filter(
        (project) => project.id !== action.project.id
      );
    } else {
      updatedProjects = [...state.projects];
      updatedProjects[existingProjectIndex] = {
        ...existingProject,
        time: existingProject.time - 1,
      };
    }
    const updatedTotalTime = state.totalTime - action.project.time;
    return { projects: updatedProjects, totalTime: updatedTotalTime };
  }
  if (action.type === "CLEAR") {
    return defaultTodayState;
  }
  return defaultTodayState;
};

const TodayProvider = (props) => {
  const [todayState, dispatchTodayAction] = useReducer(
    todayReducer,
    defaultTodayState
  );

  useEffect(() => {
    localStorage.setItem("todayData", JSON.stringify(todayState));

    const todayDataFromLocalStorage = JSON.parse(
      localStorage.getItem("todayData")
    );
    console.log(todayDataFromLocalStorage);
  }, [todayState]);

  const addProjectHandler = (project) => {
    dispatchTodayAction({ type: "ADD", project });
  };

  const removeProjectHandler = (project) => {
    dispatchTodayAction({ type: "REMOVE", project });
  };

  const clearProjectHandler = () => {
    dispatchTodayAction({ type: "CLEAR" });
  };

  const todayContext = {
    projects: todayState.projects,
    totalTime: todayState.totalTime,
    addProject: addProjectHandler,
    removeProject: removeProjectHandler,
    clearProject: clearProjectHandler,
  };

  return (
    <TodayContext.Provider value={todayContext}>
      {props.children}
    </TodayContext.Provider>
  );
};

export default TodayProvider;
