import { BellDotIcon, Menu, Search } from "lucide-react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-10 bg-amber-300">
      <div className="flex justify-between">
        <div className="flex items-center pl-20 gap-10">
          <Menu />
          <Search />
        </div>
        <div className="flex items-center pr-10 gap-5">
          <IoCartOutline className="w-6 h-10"/>
          <FaRegMessage/>
          <BellDotIcon/>
          <div className="flex justify-between">
            <img className="h-10 bg-red-500 rounded-[50%]" src="public/Images/using-smartphone-woman.png" alt="" />
            <p>Hi, Abhay <FaAngleDown/> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
