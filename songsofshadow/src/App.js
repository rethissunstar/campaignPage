import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Story from "./components/story/story";
import Characters from "./components/characters/characters";
import Charms from "./components/charms/charms";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/charms" element={<Charms />} />
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
  );
};

export default App;
