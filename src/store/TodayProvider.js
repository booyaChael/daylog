import TodayContext from "./today-context";
import { useReducer } from "react";

const defaultTodayState = {
  projects: [],
  totalTime: 0,
};

const todayReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedProjects = state.projects.concat(action.project);
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
