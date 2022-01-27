import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/HomeLayout"
import Projects from "./projects"
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";

const IndexPage = () => {
  return (
    <HomeLayout>
      <div
        id="home"
        className="hero-section min-h-screen w-[100%] object-contain flex justify-center items-center"
      >
        <div className="text-white w-6/12 grid place-content-center text-center">
          <div className="text-6xl uppercase tracking-wider">Wahaj Haider</div>
          <div className="text-2xl pl-11 pr-11 tracking-wide">
            Aspiring Full Stack Developer with a passion to create and innovate
          </div>
        </div>
      </div>
      <section
        id="about"
        className="bg-[#2b2b2b] flex justify-center items-center text-white font-karla"
      >
        <div className="w-8/12 flex flex-col lg:flex-row xl:flex-row justify-center items-center pt-40 pb-40 gap-20">
          <div className="grid place-content-center">
            <img
              src={require("../images/wahaj-face-pic.jpg").default}
              alt=""
              className="max-w-[300px] rounded-2xl m-0 shadow-2xl"
            />
          </div>
          <div>
            <div className="text-5xl tracking-wider mb-5">About Me</div>
            <div className="grid place-content-center">
              <p className="text-white text-lg tracking-wide mb-2">
                Hey there! I'm <b>Wahaj Haider</b>, a second year computer
                science co-op student at Ryerson University. I was first
                introduced to the world of programming during my junior year of
                high school, and ever since then, I've been hooked. I love being
                able to create something out of nothing and doing it so for the
                benefit/entertainment of others takes it to a whole new level.
              </p>
              <p className="text-white text-lg tracking-wide mb-2">
                I've recently taken an interest in <b>web development</b> and
                have had a lot of fun building web applications using
                technologies/frameworks such as <b>JavaScript</b>, <b>HTML</b>,{" "}
                <b>CSS</b>, <b>React</b>, <b>Express.js</b>, <b>SQL</b>, etc.
                I'm also proficient in other languages such as <b>Java</b> and{" "}
                <b>Python</b>. I plan to further extend my knowledge by
                exploring more frontend technologies/frameworks and diving
                deeper into the backend side of things.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="bg-white flex justify-center items-center"
      >
        <div className="w-11/12 flex flex-col justify-center items-center pt-20 pb-20 pr-40 pl-40 gap-20">
          <div className="text-5xl tracking-wider mb-5 text-center">
            Projects
          </div>
          <div className="flex justify-around items-center w-[100%] flex-wrap">
            <div className="border-solid border-4 border-[#2b2b2b] w-64 h-[26rem] rounded-xl mr-10 ml-10 flex flex-col p-3 hover:bg-[#2b2b2b] hover:text-white transition-colors duration-500">
              <div className="flex flex-col flex-0 justify-start items-center">
                <img
                  className="shadow-sm mb-3 rounded-t-md"
                  src={require("../images/heart-watch-screenshot.png").default}
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1">
                <h4 className="mb-0 text-lg">Heart-Watch</h4>
                <p className="m-0 text-sm leading-5">
                  A website providing an overview for Heart-Watch, a mobile
                  application providing a modern and simple solution for
                  cardiovascular disease prevention and protection.
						<div className="italic mt-2">
							This project was submitted to DeltaHacks 8.
						</div>
                </p>
              </div>
              <div className="flex flex-row flex-1 justify-center items-end">
                <a className="flex flex-1 justify-center" target="_blank" href="https://heartwatch.tech/">
					 	<span className="grid place-content-center mr-1"><CgWebsite /></span>
						Live Demo
                </a>
                <a className="flex flex-1 justify-center" target="_blank" href="https://heartwatch.tech/">
						<span className="grid place-content-center mr-1"><AiFillGithub /></span>
						GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}

export default IndexPage
