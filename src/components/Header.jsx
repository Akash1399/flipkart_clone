import React, { useState } from "react";
import logo from "../assets/logo.png";
import { List, X } from "phosphor-react";
import {
  MagnifyingGlass,
  CaretUp,
  CaretDown,
  ShoppingCart,
} from "phosphor-react";
import MoreDropDown from "./MoreDropDown";
import MobileDrop from "./MobileDrop";
function Header() {
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);
  const [toggleNav, setToogleNav] = useState(false);
  return (
    <header className="bg-primary fixed top-0 py-2.5 w-full z-10">
      <div className="w-full sm:w-9/12 px-1 sm:px-4  m-auto flex justify-between items-center relative">
        <div className="flex items-center gap-2 flex-1">
          <div className="h-7 mr-1 sm:mr-4">
            <img src={logo} className="h-full" />
          </div>
          <div className="w-full sm:w-9/12 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white rounded-sm overflow-hidden">
            <input
              className="text-sm flex-1 outline-none border-none placeholder-gray-500"
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button type="submit" className="text-primary-blue">
              <MagnifyingGlass size={20} color="#2874f0" weight="bold" />
            </button>
          </div>
          <button className="sm:block hidden px-3 sm:px-9 py-0.5 text-primary bg-white border font-medium rounded-sm cursor-pointer hover:bg-gray-200">
            Login
          </button>
          <button
            className="sm:hidden block"
            onClick={() => setToogleNav((prev) => !prev)}
          >
            {toggleNav ? (
              <X size={32} color="white" />
            ) : (
              <List size={32} color="white" />
            )}
          </button>
          {toggleNav && <MobileDrop />}
        </div>
        <div className="sm:flex hidden items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
          <button className="px-3 sm:px-6 py-0.5 text-white  font-semibold rounded-sm cursor-pointer ">
            Become a Seller
          </button>
          <span
            className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer"
            onClick={() => setToggleSecondaryDropDown(!toggleSecondaryDropDown)}
          >
            More
            <span>
              {toggleSecondaryDropDown ? (
                <CaretUp size={18} />
              ) : (
                <CaretDown size={18} />
              )}
            </span>
          </span>
          {toggleSecondaryDropDown && <MoreDropDown />}
          {/* SECONDARY DROP DOWN SHOULD PLACE HERE */}
          <button
            to="/cart"
            className="flex items-center text-white font-medium gap-2 relative"
          >
            <span>
              <ShoppingCart size={24} weight="fill" />
            </span>
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
