import React from "react";
import Offcanvas from "./Offcanvas/Offcanvas";
// UI
import "./Navbar.scss";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  return (
    <div className="nav position-sticky top-0 start-0">
      <div className="container d-flex align-items-center justify-content-between">
        <img src={logo} className="nav__logo" alt="Logo" />

        <ul className="nav__items align-items-center m-0 d-none d-md-flex list-unstyled">
          <li className="me-4 pe-1">Home</li>
          <li className="mx-4 pe-1">About</li>
          <li className="mx-4 pe-1">Projects</li>
          <li className="ms-4 me-5 pe-1">Skills</li>
          <li className="px-lg-5 py-lg-3 px-md-3 py-md-2 nav__itemsActive">
            Contact Me
          </li>
        </ul>
        <Offcanvas />
      </div>
    </div>
  );
}

export default React.memo(Navbar);
