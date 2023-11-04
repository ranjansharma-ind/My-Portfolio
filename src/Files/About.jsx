import React from "react";
import Image from "./Images/About.JPG";
import "./Style.css";

function About() {
  return (
    <div className="row about container">
      <div className="col-lg-6">
        <center>
          <img src={Image} alt="About" className="mt-3"/>
        </center>
      </div>
      <div className="col-lg-6 homeText">
        <h1>About Us</h1>
        <p>
          Hello, I'm Ranjan, a passionate software engineer who thrives on
          solving complex problems and turning ideas into innovative solutions.
          <br />
          Here's a little more about my background and what drives me in the
          world of software engineering.
        </p>
        <button>Know more</button>
      </div>
    </div>
  );
}

export default About;
