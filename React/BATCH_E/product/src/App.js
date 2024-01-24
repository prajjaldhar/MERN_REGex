import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import ProjectCard from "./Components/ProjectCard";

import Cart from "./Components/Cart";
import Makeup from "./Components/Makeup";
import About from "./Components/About";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-center mb-3 pb-4">Instagram clone</h1>
      <div className="d-flex flex-wrap">
        <Cart />
      </div>
    </>
  );
}

export default App;
