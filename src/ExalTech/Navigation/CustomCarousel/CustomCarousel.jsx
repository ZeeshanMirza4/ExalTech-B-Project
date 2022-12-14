import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

const CustomCarousel = () => {
  const carouselSelector = useSelector((State) => State.CarouselReducer);
  return (
    <div>
      <Carousel>
        {carouselSelector.map((item, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.CarouselImage}
                alt="First slide"
                height={"500px"}
                width={"100%"}
              />
              <Carousel.Caption>
                <h3>{item.CarouselTitle}</h3>
                <p>{item.CarouselDesc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
