import React from "react";
import "./Style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function LetsTalk() {
  return (
    <div className="letstalk">
      <p>Still confused. then,</p>
      <h1>Let's talk</h1>
      <p>
        or send an email to <span>ranjansharma.ind@gmail.com</span>
      </p>
      <div className="icon">
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>
    </div>
  );
}

export default LetsTalk;
