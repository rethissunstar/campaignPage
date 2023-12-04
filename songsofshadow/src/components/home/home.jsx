// this is the landing page as specified in app.js
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="container"></div>
      <div className="heading">
        <h1>News</h1>
        <p>This site is under construction tune in for new features</p>
      </div>
      <div className="heading update1">
        <h1>update 1</h1>
        <p>Added character page logic and character sheet</p>
      </div>
    </div>
  );
};

export default Home;
