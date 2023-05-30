import React from "react";
// typo effect
import Typical from "react-typical";
// UI
import emoji from "../../../assets/emoji/prog.png";

function MyIDE() {
  return (
    <>
      <div className="header__ide bg-dark shadow rounded p-2">
        <div className="header__ideHeader mb-3 d-flex">
          <div className="bg-danger"></div>
          <div className="bg-warning"></div>
          <div className="bg-success"></div>
        </div>

        <div className="header__ideBody">
          <div className="header__ideLine">
            <span className="ide__num me-2">1</span>
            {"<"}
            <span className="ide__div">{"div"}</span>
            {">"}
          </div>

          <div className="header__ideLine">
            <span className="ide__num me-4">2</span>
            {" <"}
            <span className="ide__div">{"span"}</span>
            {">"}
            HI THERE 👋 I'M
            {"</"}
            <span className="ide__div">{"span"}</span>
            {">"}
          </div>

          <div className="header__ideLine">
            <span className="ide__num me-4">3</span>
            {" <"}
            <span className="ide__div">{"h1"}</span>
            {">"}
            <Typical
              className="d-inline"
              steps={[1000, "Mahdi Zandian", 3000, "A Developer", 2000]}
              loop={Infinity}
              wrapper="p"
            />
            {"</"}
            <span className="ide__div">{"h1"}</span>
            {">"}
          </div>

          <div className="header__ideLine">
            <span className="ide__num me-4">4</span>
            {" <"}
            <span className="ide__div">{"h6"}</span>
            {">"}
            FRONT-END WEB DEVELOPER
            <img
              className="ms-1"
              style={{ maxWidth: "20px" }}
              src={emoji}
              alt="Technologist Man"
            />
            {"</"}
            <span className="ide__div">{"h6"}</span>
            {">"}
          </div>

          <div className="header__ideLine">
            <span className="ide__num me-4">5</span>
            {" <"}
            <span className="ide__div">{"p"}</span>
            {">"}
          </div>

          <div className="header__ideLine ">
            <span className="ide__num ide__numCondition me-5">6</span>
            I'm a Front End developer who is passionate about
          </div>

          <div className="header__ideLine ">
            <span className="ide__num ide__numCondition me-5">7</span>
            JavaScript technologies, based in IRAN, TEHRAN.
          </div>

          <div className="header__ideLine">
            <span className="ide__num me-4">8</span>
            {" </"}
            <span className="ide__div">{"p"}</span>
            {">"}
          </div>

          <div className="header__ideLine">
            <span className="ide__num me-4">9</span>
            {" <"}
            <span className="ide__div">{"button"}</span>
            {">"}
            Download CV
            {"</"}
            <span className="ide__div">{"button"}</span>
            {">"}
          </div>

          <div className="header__ideLine">
            <span className="ide__num me-2">10</span>
            {"</"}
            <span className="ide__div">{"div"}</span>
            {">"}
          </div>

          <small className="text-muted">
            {"* Trust me , It's not that easy :)"}
          </small>
        </div>
      </div>
    </>
  );
}

export default React.memo(MyIDE);
