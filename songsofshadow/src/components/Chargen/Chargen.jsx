// src/components/chargen/CharGen.jsx
import React from "react";
import "./Chargen.css";
import Solar from "./solars/solars"; // Adjust the path based on your project structure

const CharGen = () => {
  return (
    <div>
      <div className="title">
        <h2>Character Generation</h2>
      </div>
      <div>
        <Solar />
      </div>
    </div>
  );
};

export default CharGen;
