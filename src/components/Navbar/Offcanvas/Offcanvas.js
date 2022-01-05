import React from "react";
// animation
import Fade from "react-reveal/Fade";
// UI
import "./Offcanvas.scss";
import { GiHamburgerMenu } from "react-icons/gi";

function Offcanvas() {
  return (
    <div className="nav__offcanvas d-md-none d-block">
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#nav__offcanvas"
        aria-controls="nav__offcanvas"
        className="nav__offCanvasIcon p-2 rounded-circle"
      >
        <GiHamburgerMenu className="fs-2" />
      </div>

      <div
        style={{ backgroundColor: "black" }}
        className="offcanvas offcanvas-end w-100"
        tabIndex="-1"
        id="nav__offcanvas"
        aria-labelledby="nav__offcanvasLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            className="shadow-none border-none btn-close fs-5 mx-5 my-4 btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          style={{ overflowX: "hidden" }}
          className="offcanvas-body d-flex justify-content-center"
        >
          <Fade left cascade>
            <ul className="nav__offcanvasList d-flex flex-column align-items-center list-unstyled w-100">
              <li>
                <span>01</span>
                <span>Home</span>
              </li>
              <li>
                <span>02</span>
                <span>About</span>
              </li>
              <li>
                <span>03</span>
                <span>Projects</span>
              </li>
              <li>
                <span>04</span>
                <span>Skills</span>
              </li>
              <li className="nav__offcanvasActive">
                <span>05</span>
                <span>Contact Me</span>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Offcanvas);
