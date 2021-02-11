import { useState } from "react";
import "./App.css";
import avatar from "./avatar.png";

//components
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  const [mainWindow, setMainWindow] = useState(<Home />);
  return (
    <div className="App">
      <button
        onClick={() => {
          setMainWindow(<Home />);
        }}
      >
        <img src={avatar} width={100} alt="Scyther" />
      </button>
      <div className="nav">
        <button
          onClick={() => {
            setMainWindow(<Projects />);
          }}
        >
          Projects
        </button>
        <button
          onClick={() => {
            setMainWindow(<Skills />);
          }}
        >
          Skills
        </button>
        <button onClick={() => {
          setMainWindow(<Contact />)
        }}>Contact</button>
      </div>
      <div className="main">{mainWindow}</div>
      <div className="footer">
        <p className="footer_text">Made with ❤️ by Chirag Sharma</p>
      </div>
    </div>
  );
};

export default App;
