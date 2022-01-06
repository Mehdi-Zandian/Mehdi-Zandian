import React from "react";
import MyIDE from "./MyIDE";
// typo effect
import Typical from "react-typical";
// UI
import emoji from "../../../assets/emoji/prog.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header mb-5 container d-flex flex-column flex-lg-row align-items-lg-center">
      <div className="d-flex col-12 col-lg-7 flex-column justify-content-center align-items-lg-start align-items-center">
        <span>HI THERE 👋 I'M</span>

        <h1 className="h1 fw-bold display-2 my-3 text-center">
          <Typical
            steps={["Mahdi Zandian", 3000, "A Developer", 2000]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>

        <div className="header__skill d-flex align-items-end fw-bold">
          FRONT-END WEB DEVELOPER
          <img className="ms-1" src={emoji} alt="Technologist Man" />
        </div>

        <p className="my-4 text-center text-lg-start col-10 col-md-6 col-lg-4">
          I’m a professional Web Developer with front end development skills
          based in <span style={{ color: "#0fb" }}>IRAN, TEHRAN</span>.
        </p>

        <button className="header__btn btn">Hire Me</button>
      </div>

      <div className="d-flex col-12 col-lg-5 justify-content-center mt-5 mt-lg-0">
        <MyIDE />
      </div>
    </div>
  );
}

export default React.memo(Header);
