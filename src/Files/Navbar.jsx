import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-none">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Ranjan
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <hr/>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Whatido">
                    My Work
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Letstalk">
                    Connect
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default Navbar;