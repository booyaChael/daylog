import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";
import Today from "./components/Today/Today";
import SideBar from "./components/Layout/SideBar";
import { useState } from "react";
import TodayProvider from "./store/TodayProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyLogsPage, StaticsPage, EditPage } from "./pages";
import classes from "./App.module.css";

function App() {
  const [showToday, setShowToday] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const showTodayHandler = () => {
    setShowToday(true);
  };

  const hideTodayHandler = () => {
    setShowToday(false);
  };

  const toggleShowSideBarHandler = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <TodayProvider>
      <div className="App">
        <BrowserRouter>
          {showToday && <Today onClose={hideTodayHandler} />}
          <Header
            onShowToday={showTodayHandler}
            onHandleSideBar={toggleShowSideBarHandler}
          />
          <div className={classes.main}>
            {showSideBar && <SideBar showSideBar={showSideBar} />}
            <div>
              <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/my_logs" element={<MyLogsPage />} />
                <Route path="/statics" element={<StaticsPage />} />
                <Route path="/edit" element={<EditPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </TodayProvider>
  );
}

export default App;
