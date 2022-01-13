import React from "react";
import MyIDE from "./MyIDE";
import { HashLink as Link } from "react-router-hash-link";
// typo effect
import Typical from "react-typical";
// animation
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
// UI
import emoji from "../../../assets/emoji/prog.png";
import "./Header.scss";

function Header() {
  return (
    <div
      id="header"
      style={{ backgroundColor: "#212121", paddingBottom: "100px" }}
    >
      <div className="header container d-flex flex-column flex-lg-row align-items-lg-center">
        <Fade bottom cascade>
          <div className="d-flex col-12 col-lg-7 flex-column justify-content-center align-items-lg-start align-items-center">
            <span>HI THERE 👋 I'M</span>

            <h1 className="h1 fw-bold display-2 my-3 text-center">
              <Typical
                steps={["Mahdi Zandian", 3000, "A Developer", 2000]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>

            <h6 className="header__skill m-0 d-flex align-items-end fw-bold">
              FRONT-END WEB DEVELOPER
              <img className="ms-1" src={emoji} alt="Technologist Man" />
            </h6>

            <p className="my-4 text-center text-lg-start col-10 col-md-6 col-lg-7">
              I’m a professional Web Developer with front end development skills
              based in <span style={{ color: "#0fb" }}>IRAN, TEHRAN</span>.
            </p>

            <Link className="text-decoration-none text-dark" to="/#contact">
              <button className="header__btn btn">Hire Me</button>
            </Link>
          </div>
        </Fade>

        <div className="d-flex col-12 col-lg-5 justify-content-center mt-5 mt-lg-0">
          <Slide right>
            <MyIDE />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
