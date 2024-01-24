import React from "react";
import "./App.css";
import CovidData from "./CovidData";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CovidData />
    </div>
  );
}

export default App;
