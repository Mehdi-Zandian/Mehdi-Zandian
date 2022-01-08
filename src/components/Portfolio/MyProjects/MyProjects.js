// UI
import "./MyProject.scss";
import { FaInfo, FaCheck } from "react-icons/fa";
import s1 from "../../../assets/projects/amazon/S1.jpg";

function MyProjects() {
  return (
    <div className="myProj container">
      <div className="d-flex justify-content-center mb-5">
        <div>
          <div className="myProj__header justify-content-center d-flex align-items-center">
            My Portfolio
            <span className="ms-2"></span>
          </div>
          <h5 className="mt-3 fw-bold">My Projects</h5>
        </div>
      </div>

      <div className="myProj__body d-flex flex-wrap justify-content-center gap-5">
        <div className="myProj__bodyItem shadow col-12 col-lg-5">
          <img src={s1} className="" />
          <div className="myProj__itemInfo d-flex flex-column align-items-start justify-content-between p-3">
            <div>
              <h4 className="fw-bold d-flex align-items-center">
                <FaCheck
                  style={{ fontSize: "20px", color: "#70e000" }}
                  className="me-1"
                />{" "}
                Amazon Clone
              </h4>
              <p style={{ fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                nesciunt dignissimos perspiciatis. Expedita aliquid tenetur, quo
                ...
              </p>
              <div className="tags">
                <span>ReactJS</span>
                <span>Bootrap5</span>
                <span>Authen</span>
              </div>
            </div>

            <button class="p-2 d-flex align-items-center">
              <FaInfo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
