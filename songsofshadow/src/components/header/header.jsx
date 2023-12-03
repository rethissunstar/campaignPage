import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import exaltedLogo from "./exalted2ndlogo.jpg"; // Import the image

const Header = () => {
  const toggleMode = () => {
    const toggleBtn = document.getElementById("switch");
    const bodyVar = document.body;
    const currentMode = bodyVar.classList.contains("dark") ? "dark" : "light";

    if (currentMode === "light") {
      bodyVar.classList.remove("light");
      bodyVar.classList.add("dark");
    } else {
      bodyVar.classList.remove("dark");
      bodyVar.classList.add("light");
    }
  };

  return (
    <header>
      <div className="btnContain">
        <Link to="/home" className="ltitle">
          <img src={exaltedLogo} alt="Exalted Logo" />
        </Link>
        <a href="/story" className="rtitle">
          Story
        </a>
        <a href="/characters" className="rtitle">
          Characters
        </a>
        <a href="/charms" className="rtitle">
          Charms
        </a>
      </div>
      <div className="switch" id="switch" onClick={toggleMode}>
        <input type="checkbox" />
        <div className="slider round"></div>
      </div>
    </header>
  );
};

export default Header;
