import React from "react";
// import Main from "./Images/About.JPG";
import "./Style.css";

function Home() {
  return (
    <div className="row mt-5">
      {/* <div className="col-lg-6 justify-content-center text-align-center align-items-center d-flex">
        <div className="homeImage">
          <img src={Main} alt="Main" />
        </div>
      </div> */}
      <div className="col-lg-12">
        <div className="homeText m-5">
          <p>this is me,</p>
          <h1>Ranjan Sharma</h1>
          <p>Web Developer</p>
          <p>Design - Develop - Branding</p>
          <div className="mt-5">
            <button>More About me</button>
            <button>Hire me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
