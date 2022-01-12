import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectSlider from "./ProjectSlider";
// animation
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
// UI
import "./ProjectDetail.scss";
import { FaTools, FaGithub } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import { CgExternal } from "react-icons/cg";

function ProjectDetail() {
  // id of each project
  const { id } = useParams();

  // fetch data from my local api
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(
      "../data.json",

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) =>
        data?.data.find((proj) => (proj?.id === id ? setData(proj) : null))
      );
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.length !== 0 ? (
        <div className="detail">
          <Fade bottom cascade>
            <div className="d-flex flex-column justify-content-center my-5">
              <div className="detail__header mx-auto d-flex align-items-start">
                <h6>About Project</h6>
                <span className="ms-2 mt-2"></span>
              </div>
              <h3 className="mt-2 mx-auto fw-bolder">{data?.name} Website</h3>
            </div>
          </Fade>

          <div>
            <ProjectSlider data={data} />

            <div
              style={{
                marginBottom: "100px",
                maxWidth: "500px",
              }}
              className="mx-auto px-4"
            >
              <Fade>
                <div className="detail__about">
                  {data?.about.map((para, i) => {
                    return <p key={i}>{para}</p>;
                  })}
                </div>
              </Fade>

              <Zoom cascade>
                <div className="detail__tags mx-auto d-flex flex-wrap justify-content-start gap-2 mb-5">
                  {data?.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </Zoom>

              <div className="gradient-border p-2 rounded">
                <Fade>
                  <div className="detail__techPic w-100 d-flex align-items-top">
                    <div>
                      <h6 className="d-flex align-items-center m-0">
                        <FaTools style={{ color: "#888" }} className="me-2" />
                        <span>Tech Stack :</span>
                      </h6>
                    </div>
                    <div className="d-flex flex-wrap gap-2 align-items-center">
                      {data?.techPic.map((t, i) => {
                        return (
                          <img
                            key={i}
                            style={{
                              width: "20px",
                            }}
                            src={t}
                            alt="Tech"
                          />
                        );
                      })}
                    </div>
                  </div>
                </Fade>

                <Fade>
                  <div className="detail__live d-flex my-2">
                    <div className="d-flex align-items-center">
                      <GoFlame className="flame me-2" />
                      <span className="me-2">Live Website :</span>
                    </div>
                    <a target="_blank" href={data?.links[0]}>
                      {data?.name}
                      <CgExternal />
                    </a>
                  </div>
                </Fade>

                <Fade>
                  <div className="detail__code d-flex">
                    <div className="d-flex align-items-center">
                      <FaGithub className="github me-2" />
                      <span className="me-2">Github Link :</span>
                    </div>
                    <a target="_blank" href={data?.links[1]}>
                      Github Link
                      <CgExternal />
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader__wrapper w-100 d-flex justify-content-center align-items-center position-fixed top-0 start-0">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
