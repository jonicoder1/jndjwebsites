import "./App.css";
import AboutMe from "./components/about-me";
import Contact from "./components/contacts";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
