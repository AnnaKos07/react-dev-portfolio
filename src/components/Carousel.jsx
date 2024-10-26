import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css"

const Carousel = ({ images, reverse, imageWidth }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: reverse,
  };

  return (
    <div  className="carousel-container" style={{ height: "280px"}}>
      <Slider {...settings} >
        {images.map((image, index) => (
          <div key={index}  style={{ width: imageWidth}}>
            <img src={image} alt={`Slide ${index}`}  style={{ width: imageWidth, height: "auto"}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
