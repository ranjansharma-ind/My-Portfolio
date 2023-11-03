import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

function Navbar() {

  const [show, setShow] = useState(false);

  const offsetValue = -56;

  const toggleoffCanvas = () =>{
    setShow((show) => !show);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-transparent">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            portfolio
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
            show={show}
            aria-hidden={{toggleoffCanvas}}
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                
              </h5>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/" offsetValue={offsetValue}>
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
    </div>
  );
}

export default Navbar;
