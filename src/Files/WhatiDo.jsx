import React from "react";
import "./Style.css";
import Design from "./Images/design.png";
import { useState } from "react";
import data from "../db.json"

function WhatiDo() {
  const MyWorks = useState(data)
  
  
  return (
    <div className="whatido">
      <h1>Projects</h1>
      <div class="row d-flex align-items-start">
        <div
          class="col -lg-6 nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            {MyWorks.title} 
          </button>
          <button
            class="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Profile
          </button>
        </div>
        <div class="col-lg-6 tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <img src={Design} alt="desing" />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabindex="0"
          >
            <img src={Design} alt="desing" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatiDo;
