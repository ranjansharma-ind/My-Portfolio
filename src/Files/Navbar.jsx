import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Offcanvas, Navbar, Nav } from "react-bootstrap";
import "./Style.css";

function Header() {
  const [show, setShow] = useState(false);

  const offsetValue = -56;

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <div>
      {/* <nav className="navbar navbar-light bg-transparent">
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
      </nav> */}
      <Navbar
        className="navbar navbar-light bg-transparent container"
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand className="navbar-brand" href="#">
            portfolio
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="navbar-toggler"
            onClick={toggleOffCanvas}
          />
          <Navbar.Offcanvas
            className="offcanvas"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={toggleOffCanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body">
              <Nav className="justify-content-end flex-grow-1 pe-3 offcanvas--menu offcanvas-body">
                <NavLink
                  activeClass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  className="nav-link"
                  onClick={toggleOffCanvas}
                >
                  Home
                </NavLink>
                <NavLink
                  activeClass="active"
                  to="/About"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  onClick={toggleOffCanvas}
                  className="nav-link"
                >
                  About
                </NavLink>
                <NavLink
                  activeClass="active"
                  to="/Whatido"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  onClick={toggleOffCanvas}
                  className="nav-link"
                >
                  My Work
                </NavLink>
                <NavLink
                  activeClass="active"
                  to="/Letstalk"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={500}
                  onClick={toggleOffCanvas}
                  className="nav-link"
                >
                  Contact
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
