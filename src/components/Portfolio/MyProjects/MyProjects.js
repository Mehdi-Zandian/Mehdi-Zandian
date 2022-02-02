import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// animation
import Fade from "react-reveal/Fade";
// UI
import "./MyProject.scss";
import { FaInfo, FaCheck } from "react-icons/fa";

function MyProjects() {
  // fetch data from my local api
  const [data, setData] = useState([]);
  const getData = () => {
    const controller = new AbortController();
    fetch(
      "data.json",

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        signal: controller.signal,
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data?.data))
      .catch(() => controller.abort());
  };
  useEffect(() => {
    getData();
  }, []);

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
            <h5 className="mt-3 fw-bold">My Projects</h5>
          </div>
        </Fade>
      </div>

      <div className="myProj__body d-flex flex-wrap justify-content-center">
        {data.length != 0 ? (
          data.map((proj) => (
            <div
              key={proj?.id}
              className="myProj__bodyItem shadow col-12 col-lg-5 me-lg-5 mb-5"
            >
              <Link
                title="Click To See More"
                to={`/detail/${proj?.id}`}
                className="text-decoration-none text-white"
              >
                <img src={`${proj?.banner}`} alt=" " />
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

                  <button className="d-flex align-items-center">
                    <FaInfo />
                  </button>
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
