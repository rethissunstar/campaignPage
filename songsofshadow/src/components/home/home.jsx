import React, { useEffect, useState } from "react";
import "./home.css";
import "../../dist/output.css";

const Home = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Get the current date and set it to the state
    const now = new Date();
    const formattedDate = `${now.toDateString()} ${now.toLocaleTimeString()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <div className="container"></div>
      <div className="heading">
        <h1>News</h1>
        <p>This site is under construction tune in for new features</p>
      </div>
      <div className="heading update1 w-92">
        <h1>update 2</h1>
        <p>pdf loader working and dice roller added underneath</p>
      </div>
      <div className="heading update1">
        <h1>update 1</h1>
        <p>Added character page logic and character sheet</p>
      </div>
      <div className="date">
        <p>{`Updated: ${currentDate}`}</p>
      </div>
    </div>
  );
};

export default Home;
