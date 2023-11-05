import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Offcanvas, Navbar, Nav } from "react-bootstrap";
import "./Style.css";
import PropTypes from 'prop-types';

function Header(props) {
  const [show, setShow] = useState(false);

  const offsetValue = -56;

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <div>
      <Navbar
        className="navbar navbar-light bg-transparent container"
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand className="navbar-brand" to="/">
            {props.title}
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
              <Nav className="offcanvas-body">
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
                  {props.home}
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
                  {props.about}
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
                  {props.mywork}
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
                  {props.contact}
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

Header.propTypes = {
  title:PropTypes.string.isRequired
};

Header.defaultProps = {
  title: 'Set navbar here',
  home: 'Set navlink',
  about: 'Set navlink',
  contact: 'Set navlink',
  mywork:'Set navlink'
}