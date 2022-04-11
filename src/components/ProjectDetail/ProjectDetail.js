import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectSlider from "./ProjectSlider";
import Footer from "../Footer/Footer";
// animation
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
// UI
import "./ProjectDetail.scss";
import { FaTools, FaGithub } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import { CgExternal } from "react-icons/cg";
// data
import data from "../../data/data";

function ProjectDetail() {
  // id of each project
  const { id } = useParams();
  const [mainData, setData] = useState([]);
  useEffect(() => {
    data.find((proj) => (proj?.id === id ? setData(proj) : null));
  }, []);

  return (
    <div>
      {mainData.length !== 0 ? (
        <div id="top" className="detail">
          <Fade bottom cascade>
            <div className="d-flex flex-column justify-content-center my-5">
              <div className="detail__header mx-auto d-flex align-items-start">
                <h6>About Project</h6>
                <span className="ms-2 mt-2"></span>
              </div>
              <h3 className="mt-2 mx-auto fw-bolder">
                {mainData?.name} Website
              </h3>
            </div>
          </Fade>

          <div>
            <ProjectSlider data={mainData} />

            <div
              style={{
                marginBottom: "100px",
                maxWidth: "500px",
              }}
              className="mx-auto px-4"
            >
              <Fade>
                <div className="detail__about">
                  {mainData?.about.map((para, i) => {
                    return <p key={i}>{para}</p>;
                  })}
                </div>
              </Fade>

              <Zoom cascade>
                <div className="detail__tags mx-auto d-flex flex-wrap justify-content-start mb-5">
                  {mainData?.tech.map((t, i) => (
                    <span className="me-2 mb-2" key={i}>
                      {t}
                    </span>
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
                    <div className="d-flex flex-wrap align-items-center">
                      {mainData?.techPic.map((t, i) => {
                        return (
                          <img
                            className="me-2 mb-1"
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
                  <div className="detail__live d-flex mb-2 mt-1">
                    <div className="d-flex align-items-center">
                      <GoFlame className="flame me-2" />
                      <span className="me-2">Live Website :</span>
                    </div>
                    <a target="_blank" href={mainData?.links[0]}>
                      {mainData?.name}
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
                    <a target="_blank" href={mainData?.links[1]}>
                      Github Link
                      <CgExternal />
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <Footer href={`/detail/${id}/#top`} />
        </div>
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
}

export default ProjectDetail;
