import React from "react";
import "./Style.css";
import { Button } from "react-bootstrap";
import balinese from './Images/Balinese.jpg'
import Responsive from './Images/responsive.jpg'

function Home() {
  return (
    <div className="row mt-5">
      <div className="col-lg-8">
        <div className="homeText mt-5">
          Visual Design & Web Developer
          <p>Hi, I am Ranjan Focusing on creating </p>
          <p>Emotional Experience</p>
          <Button>See More</Button>
        </div>
        <div className="Circle">
          <ul>
            <li></li>
          </ul>
          <ul>
            <li></li>
          </ul>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 justify-content-center text-align-center align-items-center d-flex">
        <div className="homeImage">
          <img src={balinese} height={400} />
        </div>
        <div className="res" >
          <img src={Responsive} height={350} />
        </div>
      </div>
    </div>
  );
}

export default Home;
