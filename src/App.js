import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";
import Todaylog from "./components/Todaylog/Todaylog";

function App() {
  return (
    <div className="App">
      <Todaylog />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
