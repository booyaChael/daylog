import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";
import Today from "./components/Today/Today";
import { useState } from "react";
import TodayProvider from "./store/TodayProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
          {showToday && <Today onClose={hideTodayHandler} />}
          <Header onShow={showTodayHandler} />
          <Routes>
            <Route path="/" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TodayProvider>
  );
}

export default App;
