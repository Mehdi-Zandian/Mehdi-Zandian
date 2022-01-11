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
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="detail__slider">
      <Slider {...settings}>
        {data?.screenshotLarge.map((pic, i) => {
          return (
            <div className="slide-lg" key={i} style={{ height: "100%" }}>
              <img
                style={{
                  width: "100%",
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
            <div className="slide-sm" key={i} style={{ height: "100%" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
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
