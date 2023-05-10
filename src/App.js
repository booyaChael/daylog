import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";
import Today from "./components/Today/Today";
import { useState } from "react";
import TodayProvider from "./store/TodayProvider";

function App() {
  const [showToday, setShowToday] = useState(false);

  const showTodayHandler = () => {
    setShowToday(true);
  };

  const hideTodayHandler = () => {
    setShowToday(false);
  };
  return (
    <TodayProvider>
      <div className="App">
        {showToday && <Today onClose={hideTodayHandler} />}
        <Header onShow={showTodayHandler} />
        <Projects />
      </div>
    </TodayProvider>
  );
}

export default App;
