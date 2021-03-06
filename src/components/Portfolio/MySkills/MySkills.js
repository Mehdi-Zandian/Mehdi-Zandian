// animation
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
// UI
import "./MySkill.scss";
// data
import data from "../../../data/skills";

function MySkills() {
  return (
    <div id="skills" className="skill container">
      <div className="d-flex justify-content-center mb-5">
        <Fade bottom cascade>
          <div>
            <div className="skill__header justify-content-center d-flex align-items-center">
              Skills I learned
              <span className="ms-2"></span>
            </div>
            <h5 className="mt-3 fw-bold">My Skills</h5>
          </div>
        </Fade>
      </div>
      <Flip top cascade>
        <div className="skill__body d-flex flex-wrap justify-content-between">
          {data?.length !== 0 ? (
            data.map((proj, i) => {
              return (
                <div key={i} className="skill__bodyItem p-3 mb-4">
                  <div className="d-flex justify-content-between mb-2 pe-1">
                    <span>{proj.name}</span>
                    <span>{proj.percent}%</span>
                  </div>

                  <div className="progress">
                    <div
                      style={{ width: `${proj.percent}%` }}
                      className="progress-value"
                    ></div>
                  </div>
                </div>
              );
            })
          ) : (
            <span className="loader"></span>
          )}
        </div>
      </Flip>
    </div>
  );
}

export default MySkills;
