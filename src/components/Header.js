import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {

	return (
    <>
      <nav className="fixed text-white w-screen flex items-center justify-center">
        <ul className="w-6/12 flex flex-row justify-around items-center m-0 mt-[0.9rem] text-xl">
          <li className="grid place-content-center ">
            <a className="hover:bg-gray-50 bg-opacity-0 transition-all p-1" href="#home">
              Home
            </a>
          </li>
          <li className="grid place-content-center">
            <a href="#about">About</a>
          </li>
          <li className="grid place-content-center">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="grid place-content-center">
            <a href="">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;
