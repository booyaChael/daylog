import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";
import Today from "./components/Today/Today";
import { useState } from "react";

function App() {
  const [showToday, setShowToday] = useState(false);

  const showTodayHandler = () => {
    setShowToday(true);
  };

  const hideTodayHandler = () => {
    setShowToday(false);
  };
  return (
    <div className="App">
      {showToday && <Today onClose={hideTodayHandler} />}
      <Header onShow={showTodayHandler} />
      <Projects />
    </div>
  );
}

export default App;
