import React from "react";
import Image from "./Images/About.JPG";
import "./Style.css";

function About() {
  return (
    <div className="row about container d-flex justify-content-center align-items-start ">
      <div className="col-lg-6">
        <img src={Image} alt="About" />
      </div>
      <div className="col-lg-6 homeText">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quaerat
          aliquam ex. Aliquid debitis voluptate sit blanditiis maxime libero,
          alias incidunt voluptatibus ex corporis possimus sapiente cumque nam
          praesentium magnam?
        </p>
        <button>Know more</button>
      </div>
    </div>
  );
}

export default About;
