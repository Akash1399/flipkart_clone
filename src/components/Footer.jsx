import React from "react";
const footerLinks = [
  {
    title: "about",
    links: [
      "Contact Us",
      "About Us",
      "Careers",
      "Flipkart Stories",
      "Press",
      "Flipkart Wholesale",
      "Corporate Information",
    ],
  },
  {
    title: "help",
    links: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"],
  },
  {
    title: "policy",
    links: [
      "Return Policy",
      "Terms Of Use",
      "Security",
      "Privacy",
      "Sitemap",
      "EPR Compliance",
    ],
  },
  {
    title: "social",
    links: ["Facebook", "Twitter", "YouTube"],
  },
];
function Footer() {
  return (
    <footer className="w-full bg-secondary sm:py-4 py-1 sm:px-12 px-4 text-white text-xs border-b border-gray-600 flex sm:flex-row flex-col justify-between items-center  overflow-hidden">
      <div className="sm:w-7/12 w-full flex sm:flex-row  flex-col ">
        {footerLinks.map((el, index) => {
          return (
            <div
              key={index}
              className="sm:w-1/5 w-full flex flex-col sm:items-start items-center sm:ml-5 ml-0 gap-2 sm:my-6 my-3"
            >
              <h2 className="text-Ftext mb-2 uppercase">{el.title}</h2>
              {el.links.map((el, index) => {
                return (
                  <p key={index} className="hover:underline">
                    {el}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 sm:block hidden"></div>
      <div className="sm:w-5/12 w-full flex sm:flex-row flex-col my-6 sm:mx-0 mx-5 sm:gap-0 gap-2 justify-between">
        <div className="sm:w-1/2 w-full">
          <h2 className="text-Ftext">Mail us:</h2>
          <p className="mt-2 leading-5">
            Flipkart Internet Private Limited,
            <br />
            Buildings Alysaa,Begonia &
            <br />
            Clove Embassy Tech Village,
            <br />
            Outer Ring Road,Devarabeesanahalli Village
            <br />
            Bengaluru, 560103,
            <br />
            Karnataka, India
          </p>
        </div>
        <div className="sm:w-1/2 w-full">
          <h2 className="text-Ftext ">Registered Office Add.:</h2>
          <p className="mt-2 leading-5">
            Flipkart Internet Private Limited,
            <br />
            Buildings Alysaa,Begonia &
            <br />
            Clove Embassy Tech Village,
            <br />
            Outer Ring Road,Devarabeesanahalli Village
            <br />
            Bengaluru, 560103,
            <br />
            Karnataka, India
            <br />
            CIN : U51109KA2012PTC066107
            <br /> Telephone: 1800 202 9898
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
