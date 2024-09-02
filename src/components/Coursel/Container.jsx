// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourselCard from "./CourselCard";

function MultipleItems({data}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {data.map((item) => (
          <div key={item.id} style={{ paddingLeft: "20px" }}>
            <CourselCard 
              rating={item.rating}
              description={item.description}
              image={item.image}
              name={item.name}
              work={item.work}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
