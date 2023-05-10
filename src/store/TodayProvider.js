import TodayContext from "./today-context";

const TodayProvider = (props) => {
  const addTimeHandler = () => {};
  const removeTimeHandler = () => {};

  const todayContext = {
    projects: [],
    totalTime: 0,
    addTime: addTimeHandler,
    removeTime: removeTimeHandler,
  };

  return (
    <TodayContext.Provider value={todayContext}>
      {props.children}
    </TodayContext.Provider>
  );
};

export default TodayProvider;
