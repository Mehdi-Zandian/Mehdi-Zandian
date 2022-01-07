import React from "react";
// animation
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
// UI
import "./AboutMe.scss";
import me from "../../../assets/me/me.jpg";

function AboutMe() {
  return (
    <div className="aboutMe container mb-5 d-flex flex-column flex-lg-row justify-content-center gap-5">
      <Slide left>
        <div className="aboutMe__img">
          <img
            loading="lazy"
            className="w-100"
            src={me}
            alt="Mehdi Zandian Picture"
          />
        </div>
      </Slide>

      <Fade>
        <div className="aboutMe__text">
          <div className="aboutMe__textHeader d-flex align-items-start">
            <h6>Who I am</h6>
            <span className="ms-2 mt-2"></span>
          </div>

          <h3 className="fw-bold my-3">About Me</h3>

          <div className="aboutMe__body text-start">
            <p>
              I’m Mahdi Zandian, a front-end web developer and designer based in{" "}
              <span style={{ color: "#0fb" }}>Iran, Tehran</span>. I've been
              building stuff on the web for the last 2 years, working with
              various frameworks and libraries. My focus is on creating
              engaging, accessible and performant interfaces for people.
            </p>
            <p>
              Currently, I am a student of Software engineering at {""}
              <span style={{ color: "#0fb" }}>
                Shamsipour Technical College
              </span>{" "}
              for my Associate degree
            </p>
            <p>
              Being a diligent, hardworking and result oriented developer, I
              always work towards achieving best result on each project I lay my
              hands on
            </p>

            <button className="btn mt-4 border-none">My Projects</button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default React.memo(AboutMe);
