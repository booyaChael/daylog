import React from "react";

const TodayContext = React.createContext({
  projects: [],
  totalTime: 0,
  addTime: () => {},
  removeTime: () => {},
});

export default TodayContext;
