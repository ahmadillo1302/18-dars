import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed flex w-full justify-around text-center py-5 bg-[#6A1E55] bg-opacity-50 text-white backdrop-blur-lg z-50">
      <a href="#" className="font-bold text-xl ">
        Qobiljonov Ahmadillo
      </a>
      <div className="flex gap-5 text-lg">
        <NavLink
          className="borer py-2 px-4 bg-[#3B1C32] rounded-lg hover:text-xl "
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="borer py-2 px-4 bg-[#3B1C32] rounded-lg hover:text-xl "
          to="#about"
        >
          About
        </NavLink>
        <NavLink
          className="borer py-2 px-4 bg-[#3B1C32] rounded-lg hover:text-xl "
          to="#skill"
        >
          Skill
        </NavLink>
        <NavLink
          className="borer py-2 px-4 bg-[#3B1C32] rounded-lg hover:text-xl "
          to="#contact"
        >
          Contact me
        </NavLink>
      </div>
    </nav>
  );
}
