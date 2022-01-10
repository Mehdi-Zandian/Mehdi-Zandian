import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectSlider from "./ProjectSlider";
// UI
import "./ProjectDetail.scss";

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
          <h1 className="container detail__header mx-auto fw-bolder display-3 text-center my-5">
            {data?.name} Website
          </h1>

          <div>
            <ProjectSlider data={data} />

            <div className="container">Body</div>
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
