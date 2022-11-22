import React from "react";
import {
  User,
  TrendUp,
  Star,
  Table,
  Gift,
  UserFocus,
  Translate,
} from "phosphor-react";
const data = [
  {
    title: "Login and SignUp",
    icon: <User size={20} />,
  },
  {
    title: "SuperCoin Zone",
    icon: <TrendUp size={20} />,
  },
  {
    title: "Flipkard Plus Zone",
    icon: <Star size={20} />,
  },
  {
    title: "All Categories",
    icon: <Table size={20} />,
  },
  {
    title: "Trending Stores",
    icon: <Gift size={20} />,
  },
  {
    title: "More on Flipkart",
    icon: <UserFocus size={20} />,
  },
  {
    title: "Choose Language",
    icon: <Translate size={20} />,
  },
];

function MobileDrop() {
  return (
    <div className="absolute w-60 -right-2 top-10 bg-white shadow-2xl rounded flex-col text-sm">
      {data.map((item, i) => {
        const { title, icon, redirect } = item;

        return (
          <a
            className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
            key={i}
          >
            <span className="text-primary">{icon}</span>
            {title}
          </a>
        );
      })}

      <div className="absolute right-1/2 -top-2.5">
        <div className="arrow_down"></div>
      </div>
    </div>
  );
}

export default MobileDrop;
