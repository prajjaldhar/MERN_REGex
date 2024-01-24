import React from "react";
import NavBar from "./components/Navbar/NavBar.jsx";
import "./App.css";
import Card from "./components/CardComponent/Card.jsx";
import MainContainer from "./components/MainContainer.jsx";
import AvatarCard from "./components/AvatarCard/AvatarCard.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <AvatarCard />
    </>
  );
};

export default App;
