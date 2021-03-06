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
    initialSlide: 1,
  };

  return (
    <div className="detail__slider">
      <Slider {...settings}>
        {data?.screenshotLarge.map((pic, i) => {
          return (
            <div className="slide-lg" key={i} style={{ height: "100%" }}>
              <img
                className="lazyload blur-up"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                data-src={pic}
              />

              <div className="lazy-loader">
                <span></span>
              </div>
            </div>
          );
        })}
        {data?.screenshotSmall.map((pic, i) => {
          return (
            <div className="slide-sm" key={i} style={{ height: "100%" }}>
              <img
                className="lazyload blur-up"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                data-src={pic}
              />

              <div className="lazy-loader">
                <span></span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
