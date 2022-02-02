import React from "react";
import Offcanvas from "./Offcanvas/Offcanvas";
import Fade from "react-reveal/Fade";
import { HashLink as Link } from "react-router-hash-link";
// UI
import "./Navbar.scss";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  return (
    <div className="nav position-sticky start-0 top-0">
      <div className="container d-flex align-items-center justify-content-between">
        <Fade>
          <a href="/">
            <img src={logo} className="nav__logo" alt="Logo" />
          </a>
        </Fade>

        <Fade>
          <ul className="nav__items align-items-center m-0 d-none d-md-flex list-unstyled">
            <li className="me-4 pe-1">
              <Link to="/#header">Home</Link>
            </li>

            <li className="mx-4 pe-1">
              <Link to="/#about">About</Link>
            </li>

            <li className="mx-4 pe-1">
              <Link to="/#projects">Projects</Link>
            </li>

            <li className="ms-4 me-5 pe-1">
              <Link to="/#skills">Skills</Link>
            </li>

            <Link to="/#contact" className="text-decoration-none text-dark">
              <li className="px-lg-5 py-lg-3 px-md-3 py-md-2 nav__itemsActive">
                Contact Me
              </li>
            </Link>
          </ul>
        </Fade>

        <Offcanvas />
      </div>
    </div>
  );
}

export default React.memo(Navbar);
