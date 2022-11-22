import React from "react";
import beauty from "../assets/Categories/beauty.png";
import appliances from "../assets/Categories/appliances.png";
import electronics from "../assets/Categories/electronics.png";
import fashion from "../assets/Categories/fashion.png";
import furniture from "../assets/Categories/furniture.png";
import grocery from "../assets/Categories/grocery.png";
import home from "../assets/Categories/home.png";
import phone from "../assets/Categories/phone.png";
import travel from "../assets/Categories/travel.png";

const data = [
  {
    logo: appliances,
    name: "Appliances",
  },
  {
    logo: electronics,
    name: "Electronics",
  },
  {
    logo: fashion,
    name: "Fashion",
  },
  {
    logo: furniture,
    name: "Furniture",
  },
  {
    logo: grocery,
    name: "Grocery",
  },
  {
    logo: beauty,
    name: "Beauty,Toys & more",
  },
  {
    logo: home,
    name: "Home",
  },
  {
    logo: phone,
    name: "Phones",
  },
  {
    logo: travel,
    name: "Travels",
  },
];

function Categories() {
  return (
    <div className="sm:block hidden bg-white mt-10 mb-4 w-full px-12 py-1 overflow-hidden shadow">
      <div className="flex items-center justify-between mt-3">
        {data.map((el, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-0.5 group"
              key={index}
            >
              <div className="w-16 h-16">
                <img src={el.logo} className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold hover:text-primary">
                {el.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
