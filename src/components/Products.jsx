import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import { CaretLeft, CaretRight } from "phosphor-react";
import { offerProducts } from "./productList";
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
export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 1,
  swipe: false,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
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
function Products() {
  return (
    <section className="bg-white flex flex-col w-full py-1 px-1">
      <div className="w-full flex justify-between items-center px-3 py-2">
        <h1 className="text-xl font-semibold">Discount for You</h1>
        <button className="bg-primary text-white text-xs rounded-sm px-5 py-2.5  uppercase">
          View ALL
        </button>
      </div>
      <Slider {...settings}>
        {offerProducts.map((el, index) => {
          return (
            <>
              <div
                className="flex items-center flex-col  gap-1.5 p-6 cursor-pointer"
                key={index}
              >
                <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-150">
                  <img
                    src={el.image}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h2 className="font-medium text-semibold mt-2">{el.name}</h2>
                <span className="text-primary-green text-md">{el.offer}</span>
                <span className="text-gray-500 text-md">{el.tag}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </section>
  );
}

export default Products;
