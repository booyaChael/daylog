import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";
import Today from "./components/Today/Today";

function App() {
  return (
    <div className="App">
      <Today />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
