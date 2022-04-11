import React from "react";
// import WorkFlow from "./WorkFlow";
import { HashLink as Link } from "react-router-hash-link";
// animation
import Fade from "react-reveal/Fade";
// UI
import "./AboutMe.scss";
import me from "../../../assets/me/me.jpg";
import meLQ from "../../../assets/me/me-lq.jpg";

function AboutMe() {
  return (
    <>
      <div
        id="about"
        className="aboutMe container d-flex flex-column flex-lg-row justify-content-center"
      >
        <Fade>
          <div className="aboutMe__img">
            <img
              className="w-100 lazyload blur-up"
              src={meLQ}
              data-src={me}
              alt="Mehdi Zandian Picture"
            />
          </div>
        </Fade>

        <Fade>
          <div className="aboutMe__text mt-5 mt-lg-0 ms-lg-5">
            <div className="aboutMe__textHeader mt-0 d-flex align-items-start">
              <h6>Who I am</h6>
              <span className="ms-2 mt-2"></span>
            </div>

            <h3 className="fw-bold my-3">About Me</h3>

            <div className="aboutMe__body text-start">
              <p>
                I’m Mahdi Zandian, a front-end web developer and designer based
                in <span style={{ color: "#0fb" }}>Iran, Tehran</span>. I've
                been building stuff on the web for the last 2 years, working
                with various frameworks and libraries such as React JS. Also,
                I'm very passionate about JavaScript and its technologies.
              </p>
              <p>
                Currently, I am a student of Software engineering at {""}
                <span style={{ color: "#0fb" }}>
                  Shamsipour Technical College
                </span>{" "}
                for my Associate degree
              </p>
              <p>My main focus is on building fast and reliable web apps.</p>

              <Link
                title="Go To Projects"
                className="text-decoration-none text-dark"
                to="/#projects"
              >
                <button className="btn mt-4 border-none">My Projects</button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>

      {/* <WorkFlow /> */}
    </>
  );
}

export default React.memo(AboutMe);
