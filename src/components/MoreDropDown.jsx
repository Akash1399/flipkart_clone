import React from "react";
import { Bell, Briefcase, Info, TrendUp, DownloadSimple } from "phosphor-react";
const data = [
  {
    title: "Notification Preferences",
    icon: <Bell size={20} />,
    redirect: "https://www.flipkart.com/communication-preferences/push",
  },
  {
    title: "Sell on Flipkart",
    icon: <Briefcase size={20} />,
    redirect: "https://seller.flipkart.com/sell-online",
  },
  {
    title: "24x7 Customer Care",
    icon: <Info size={20} />,
    redirect: "https://www.flipkart.com/helpcentre",
  },
  {
    title: "Advertise",
    icon: <TrendUp size={20} />,
    redirect: "https://advertising.flipkart.com",
  },
  {
    title: "Download App",
    icon: <DownloadSimple size={20} />,
    redirect: "https://www.flipkart.com/mobile-apps",
  },
];

function MoreDropDown() {
  return (
    <div className="absolute w-60 -right-2 top-10 bg-white shadow-2xl rounded flex-col text-sm">
      {data.map((item, i) => {
        const { title, icon, redirect } = item;

        return (
          <a
            className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
            href={redirect}
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

export default MoreDropDown;
