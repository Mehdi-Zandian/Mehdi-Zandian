import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectSlider({ data }) {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="detail__slider">
      <Slider {...settings}>
        {data?.screenshotLarge.map((pic, i) => {
          return (
            <div key={i} style={{ height: "100%" }}>
              <img
                loading="lazy"
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
        {data?.screenshotSmall.map((pic, i) => {
          return (
            <div key={i} style={{ height: "100%" }}>
              <img
                loading="lazy"
                style={{
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
