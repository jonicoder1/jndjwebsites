import "./App.css";
import AboutMe from "./components/about-me";
import Contact from "./components/contacts";
import Menu from "./components/menu";
import WebServices from "./components/web-services";

function App() {
  return (
    <div className="App">
      <Menu />
      <AboutMe />
      <WebServices />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
