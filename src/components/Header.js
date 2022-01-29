import React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BiMenu } from "react-icons/bi"

const Header = () => {
  return (
    <>
      <nav className="fixed text-white w-[100%] flex flex-1 justify-start md:pr-10 md:pl-10">
        <div className="w-[100%]">
          <ul className="hidden w-[100%] md:flex justify-around items-center m-0 mt-[2rem] text-lg">
            <div className="flex flex-1 justify-around">
              <li className="">
                <a className="" href="#home">
                  Wahaj Haider
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
            <div className="flex flex-1"></div>
            <div className="flex flex-1 justify-end">
              <li className="">
                <Link
                  className="border-solid bg-[#2b2b2b]/80 hover:bg-[#2b2b2b] p-2 pr-5 pl-5 rounded-md transition-colors duration-300"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </div>
          </ul>
          <div className="md:hidden flex items-center justify-end mt-5 mr-5">
            <BiMenu size={46} />
          </div>
        </div>

        {/* <div className="flex flex-col">
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Resume</a>
          <a href="">Contact</a>
        </div> */}
      </nav>
    </>
  )
}

export default Header
