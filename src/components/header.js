import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {

	return (
    <>
      <nav className="fixed text-white w-[100%] flex flex-1 justify-start pr-10 pl-10">
        <ul className="w-[100%] flex justify-around items-center m-0 mt-[2rem] text-lg">
				<div className="flex flex-1 justify-around">
					<li className="">
						<a className="" href="#home">
						Home
						</a>
					</li>
					<li className="">
						<a href="#about">About</a>
					</li>
					<li className="">
						<a href="#projects">Projects</a>
					</li>
					<li className="">
						<Link to="/resume">Resume</Link>
					</li>
				</div>
				<div className="flex flex-1">
				</div>
				<div className="flex flex-1 justify-end">
					<li className="">
						<Link className="border-solid bg-[#2b2b2b]/80 hover:bg-[#2b2b2b] p-2 pr-5 pl-5 rounded-md transition-colors duration-300" href="/contact">Contact</Link>
					</li>
				</div>
        </ul>
      </nav>
    </>
  )
}

export default Header;
