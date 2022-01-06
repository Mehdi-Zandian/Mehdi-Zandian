import React from "react";
// typo effect
import Typical from "react-typical";
// UI
import emoji from "../../../assets/emoji/prog.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header container d-flex">
      <div className="d-flex col-6 flex-column justify-content-center align-items-sm-start align-items-center">
        <span>HI THERE 👋 I'M</span>

        <h1 className="h1 fw-bold display-1 my-3 text-center">Mahdi Zandian</h1>

        <div className="header__skill d-flex align-items-end fw-bold">
          FRONT-END WEB DEVELOPER
          <img className="ms-1" src={emoji} alt="Technologist Man" />
        </div>

        <p className="my-4 text-center text-sm-start col-10 col-md-6 col-lg-4">
          I’m a professional Web Developer with front end development skills
          based in <span style={{ color: "#0fb" }}>IRAN, TEHRAN</span>.
        </p>

        <button className="header__btn btn">Hire Me</button>
      </div>
    </div>
  );
}

export default React.memo(Header);
