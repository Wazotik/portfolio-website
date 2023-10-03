import React from "react"
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
	return (
    <>
      <div className="flex flex-col items-center bg-[#2b2b2b] text-white text-center p-10">
        <div className="w-11/12 md:w-4/12 flex flex-row justify-around items-center mt-5 mb-10">
          <a target="_blank" href="https://github.com/Wazotik">
            <AiOutlineGithub size={42} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/wahajh/">
            <AiFillLinkedin size={42} />
          </a>
          <a target="_blank" href="https://www.instagram.com/wahaj.haider21/">
            <AiFillInstagram size={42} />
          </a>
        </div>
        <div className="uppercase text-md tracking-widest mb-3">
          Wahaj Haider
        </div>
        <div className="text-sm">&copy; Copyright {new Date().getFullYear()}</div>
      </div>
    </>
  )
}

export default Footer
