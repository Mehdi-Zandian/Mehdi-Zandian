import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectSlider({ data }) {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 500,
  };

  return (
    <div className="detail__slider">
      <Slider {...settings}>
        {data?.screenshotLarge.map((pic) => {
          return (
            <div style={{ height: "100%" }}>
              <img
                style={{
                  width: "auto",
                  height: "100%",
                }}
                src={pic}
                alt="Project Screenshot"
              />
            </div>
          );
        })}
        {data?.screenshotSmall.map((pic) => {
          return (
            <div style={{ width: 177.5, height: "100px" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={pic}
                alt="Project Screenshot"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
