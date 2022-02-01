import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/HomeLayout"
import { CgWebsite } from "react-icons/cg"
import {
  AiFillGithub,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import Reveal from "react-reveal/Reveal"

const IndexPage = () => {
  return (
    <HomeLayout visisbleHeader={true}>
      {/* <Seo title={"Wahaj Haider"} /> */}
      <Helmet>
        <html lang="en" />
        <title>Wahaj Haider</title>
        <meta
          name="description"
          content="Wahaj Haider's personal portfolio website"
        />
      </Helmet>

      <div
        id="home"
        className="hero-section min-h-screen w-[100%] object-contain flex flex-col md:flex-row justify-center items-center text-white"
      >
        <div className="flex main-container"></div>
        <div className="flex justify-center items-center w-5/12 name-container">
          <div className="text-white grid place-content-center text-center">
            <div className="text-6xl md:text-7xl uppercase tracking-widest shadow-sm">
              Wahaj Haider
            </div>
            {/* <div className="text-2xl tracking-wide">
              Aspiring Full Stack Developer with a passion to create and
              innovate
            </div> */}
          </div>
        </div>
        <Fade right>
          <div className="flex justify-end items-center main-container">
            <div className="flex flex-row md:flex-col gap-10 mb-5 md:mb-0 md:mr-5 items-center text-3xl">
              <a target="_blank" href="https://github.com/Wazotik">
                <AiOutlineGithub />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/wahajh/">
                <AiOutlineLinkedin />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/wahaj.haider21/"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <section
        id="about"
        className="bg-[#2b2b2b] flex justify-center items-center text-white font-karla"
      >
        <div className="w-10/12 xl:w-8/12 flex flex-col lg:flex-row xl:flex-row justify-center items-center pt-20 pb-20 2xl:pt-40 2xl:pb-40 gap-14 lg:gap-20">
          <div className="grid place-content-center">
            <img
              src={require("../images/wahaj-face-pic.jpg").default}
              alt=""
              className="max-w-[250px] md:max-w-[300px] rounded-2xl m-0 shadow-2xl"
            />
          </div>
          <div>
            <div className="text-center lg:text-left text-4xl lg:text-5xl tracking-wider mb-3 md:mb-4 w-3/12">
              <Fade top>
                <div>About Me</div>
              </Fade>
            </div>
            <Fade bottom>
              <div className="text-center md:text-left grid place-content-center">
                <p className="text-white text-lg tracking-wide mb-2">
                  Hey there! I'm <b>Wahaj Haider</b>, a second year computer
                  science co-op student at Ryerson University. I was first
                  introduced to the world of programming during my junior year
                  of high school, and ever since then, I've been hooked. I love
                  being able to create something out of nothing and doing it so
                  for the benefit/entertainment of others takes it to a whole
                  new level.
                </p>
                <p className="text-white text-lg tracking-wide mb-2">
                  I've recently taken an interest in <b>web development</b> and
                  have had a lot of fun building web applications using
                  technologies/frameworks such as <b>JavaScript</b>, <b>HTML</b>
                  , <b>CSS</b>, <b>React</b>, <b>Express.js</b>, <b>SQL</b>,
                  etc. I'm also proficient in other languages such as{" "}
                  <b>Java</b> and <b>Python</b>. I plan to further extend my
                  knowledge by exploring more front-end technologies/frameworks
                  and diving deeper into the back-end side of things.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="bg-white flex justify-center items-center"
      >
        <div className="w-11/12 flex flex-col justify-center items-center pt-14 pb-14 md:pt-28 md:pb-28 md:pr-40 md:pl-40 gap-10">
          <Fade left>
            <div className="text-5xl tracking-wider lg:mb-5 text-center">
              Projects
            </div>
          </Fade>

          <Fade bottom>
            <div className="grid w-full gap-10 grid-cols-1 place-items-center xl:grid-cols-2">
              <div className="border-solid border-4 border-[#2b2b2b] w-80 h-[32rem] rounded-xl lg:mr-10 lg:ml-10 flex flex-col p-4 hover:bg-[#2b2b2b] hover:text-white transition-colors duration-500">
                <div className="flex flex-col flex-0 justify-start items-center">
                  <img
                    className="shadow-sm mb-3 rounded-t-md"
                    src={
                      require("../images/heart-watch-screenshot.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="flex flex-col flex-1 justify-start">
                  <h4 className="mb-1 text-lg">Heart-Watch</h4>
                  <p className="m-0 text-sm leading-5">
                    This website provides an overview for Heart-Watch, a mobile
                    application providing a modern and simple solution for
                    cardiovascular disease prevention and protection.
                    <div className="italic mt-2">
                      This project was submitted to DeltaHacks 8.
                    </div>
                  </p>
                </div>
                <div className="flex flex-1 mt-3 items-start">
                  <b>Built using JavaScript, Gatsby (React), HTML, CSS.</b>
                </div>
                <div className="flex flex-row justify-center items-end">
                  <a
                    className="flex flex-1 justify-center"
                    target="_blank"
                    href="https://heartwatch.tech/"
                  >
                    <span className="grid place-content-center mr-1">
                      <HiOutlineDesktopComputer />
                    </span>
                    Live Demo
                  </a>
                  <a
                    className="flex flex-1 justify-center"
                    target="_blank"
                    href="https://github.com/Wazotik/heart-watch-DeltaHacks8-2021"
                  >
                    <span className="grid place-content-center mr-1">
                      <AiFillGithub />
                    </span>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="border-solid border-4 border-[#2b2b2b] w-80 h-[32rem] rounded-xl lg:mr-10 lg:ml-10 flex flex-col p-4 hover:bg-[#2b2b2b] hover:text-white transition-colors duration-500">
                <div className="flex flex-col flex-0 justify-start items-center">
                  <img
                    className="shadow-sm mb-3 rounded-t-md"
                    src={
                      require("../images/react-guide-screenshot.png").default
                    }
                    alt="Weather app img"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h4 className="mb-1 text-lg leading-5">
                    React and Express Guide{" "}
                  </h4>
                  <p className="m-0 text-sm leading-5">
                    An informative guide for those who want to get started with
                    React and Express.js. Alongside the guide is a demo page
                    that uses both technologies, and a walkthrough for creating
                    that demo page, both of which I was responsible for. The
                    demo page is a weather app providing up-to-date weather data
                    based on a user's general location.{" "}
                  </p>
                </div>
                <div className="flex flex-1 mt-3 items-start">
                  <b>Built using JavaScript, React, Express, HTML, CSS.</b>
                </div>
                <div className="flex flex-row justify-center items-end">
                  <a
                    className="flex flex-1 justify-center"
                    target="_blank"
                    href="https://cps530-final-project.netlify.app/"
                  >
                    <span className="grid place-content-center mr-1">
                      <HiOutlineDesktopComputer />
                    </span>
                    Live Demo
                  </a>
                  <a
                    className="flex flex-1 justify-center"
                    target="_blank"
                    href="https://github.com/Ghazalmir/React-and-Express-Guide"
                  >
                    <span className="grid place-content-center mr-1">
                      <AiFillGithub />
                    </span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </HomeLayout>
  )
}

export default IndexPage
