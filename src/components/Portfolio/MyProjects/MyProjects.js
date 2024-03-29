import { Link } from "react-router-dom";
// animation
import Fade from "react-reveal/Fade";
// UI
import "./MyProject.scss";
import { FaInfo, FaCheck } from "react-icons/fa";
// data
import data from "../../../data/data";

function MyProjects() {
  // make long descriptions short
  const truncate = (text, num) => {
    return text.length > num ? text.substr(0, num - 1) + " ..." : text;
  };

  return (
    <div id="projects" className="myProj container">
      <div className="d-flex justify-content-center mb-5">
        <Fade bottom cascade>
          <div>
            <div className="myProj__header justify-content-center d-flex align-items-center">
              My Portfolio
              <span className="ms-2"></span>
            </div>
            <h5 className="mt-3 fw-bold">My Latest Projects</h5>
          </div>
        </Fade>
      </div>

      <div className="myProj__body d-flex flex-wrap justify-content-center">
        {data.length !== 0 ? (
          data.map((proj) => (
            <div
              onClick={() => {
                if (proj?.name !== "Amazon Clone" && proj?.id < data.length) {
                  window.open(proj.links[0]);
                } else if (proj?.id === `${data?.length}`) {
                  window.open("https://github.com/Mehdi-Zandian/Mehdi-Zandian");
                }
              }}
              key={proj?.id}
              className="myProj__bodyItem shadow col-12 col-lg-5 me-lg-5 mb-5"
            >
              <Link
                title={
                  proj?.id === `${data.length}`
                    ? "Click To See the Code"
                    : "Click To See More"
                }
                to={proj?.id === "1" && `/detail/${proj?.id}`}
                className="text-decoration-none text-white"
              >
                <img
                  className="lazyload blur-up"
                  src={`${proj?.banner[0]}`}
                  data-src={`${proj?.banner[1]}`}
                  alt=" "
                />
                <div className="myProj__itemInfo d-flex flex-column align-items-start justify-content-between p-3">
                  <div>
                    <h4 className="fw-bold d-flex align-items-center">
                      <FaCheck
                        style={{ fontSize: "20px", color: "#70e000" }}
                        className="me-1"
                      />
                      {proj?.name}
                    </h4>
                    <p style={{ fontSize: "15px" }}>
                      {truncate(proj?.about[0], 130)}
                    </p>
                    <div className="tags d-flex justify-content-start align-items-center flex-wrap">
                      {proj?.tech.slice(0, 5).map((t, i) => (
                        <span className="me-1 mb-1" key={i}>
                          {t}
                        </span>
                      ))}
                      <span>...</span>
                    </div>
                  </div>

                  {proj?.id === `${data.length}` ? (
                    <button className="current d-flex align-items-center">
                      <FaInfo />
                    </button>
                  ) : (
                    <button className="others d-flex align-items-center">
                      <FaInfo />
                    </button>
                  )}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </div>
  );
}

export default MyProjects;
