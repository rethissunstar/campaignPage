import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../../dist/output.css";
import exaltedLogo from "./exalted2ndlogo.jpg";

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
    <header className="flex">
      <div className="">
        <Link to="/home" className="w8 object-left">
          <img src={exaltedLogo} alt="Exalted Logo" />
        </Link>
      </div>
      <div className="myNav flex items-center ml-1 mr-1 p-1 justify-around ">
        <a href="/story" className="story w8 m-3 text-3xl hover:bg-orange ">
          Story
        </a>
        <a href="/characters" className="chars m-3 text-3xl">
          Characters
        </a>
        <a href="/charms" className="m-3 text-3xl">
          Charms
        </a>
        <a href="/chargen" className="m-3 text-3xl">
          CharGen
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
