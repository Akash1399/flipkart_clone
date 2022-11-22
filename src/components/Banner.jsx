import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import fashionSale from "../assets/Banners/fashion-sale.webp";
import gadgetSale from "../assets/Banners/gadget-sale.jpg";
import kitchenSale from "../assets/Banners/kitchen-sale.jpg";
import "./Banner.css";
import fashionsale from "../assets/Banners/fashionsale.jpg";
import { CaretLeft, CaretRight } from "phosphor-react";
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <CaretLeft size={32} />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <CaretRight size={32} />{" "}
    </div>
  );
};

function Banner() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  const setting = [fashionSale, fashionsale, gadgetSale, kitchenSale];
  return (
    <div className="sm:h-full h-44 sm:mt-0 mt-14 w-full rounded-sm shadow overflow-hidden">
      <Slider {...settings}>
        {setting.map((el, index) => {
          return (
            <img
              src={el}
              alt="banner"
              className="h-44 sm:h-72 w-full object-cover"
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
