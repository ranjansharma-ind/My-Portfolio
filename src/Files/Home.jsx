import React from "react";
import Main from "./Images/Main.jpg";
import "./Style.css";

function Home() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="homeImage">
          <img src={Main} alt="Main" />
        </div>
      </div>
      <div className="col-lg-6 justify-content-center text-align-center align-items-center d-flex">
        <div className="homeText">
            <span>Hello,</span>
            <h1>I'm Ranjan Sharma</h1>
            <p>Web Developer</p>
            <p>Design - Develop - Branding</p>
            <button>More About me</button>
            <button>Hire me</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
