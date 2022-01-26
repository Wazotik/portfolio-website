import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/HomeLayout"
import Projects from "./projects"

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
            Aspiring full stack developer with a passion to create and innovate
          </div>
        </div>
      </div>
      <section
        id="about"
        className="bg-[#2b2b2b] flex justify-center items-center text-white font-karla"
      >
        <div className="w-8/12 flex flex-col lg:flex-row xl:flex-row  justify-center items-center pt-40 pb-40 lg:pr-20 lg:pl-20 gap-20">
          <div className="grid place-content-center">
            <img
              src={require("../images/wahaj-face-pic.jpg").default}
              alt=""
              className="max-w-[300px] rounded-2xl m-0"
            />
          </div>
          <div>
            <div className="text-5xl tracking-wider mb-5">About Me</div>
            <div className="grid place-content-center">
              <p className="text-white text-lg tracking-wide mb-2">
                Hey there! I'm <b>Wahaj Haider</b>, a second year computer science
                co-op student at Ryerson University. I was first introduced to
                the world of programming during my junior year of high school,
                and ever since then, I've been hooked. I love being able to create
                something out of nothing and doing it so for the
                benefit/entertainment of others is even better. 
					</p>
					<p className="text-white text-lg tracking-wide mb-2">
					 I've recently
                taken an interest in web development and have had a lot of fun
                building web applications using technologies such as JavaScript,
                HTML, CSS, React, Express.js, etc. I plan to further extend
                my knowledge in the field by exploring more frontend
                technologies/frameworks and diving deeper into the backend side
                of things (yes, I'm nervous).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="bg-white flex justify-center items-center"
      >
        <div className="w-8/12 flex flex-row justify-center items-center pt-20 pb-20 pr-40 pl-40 gap-20">
			<div className="text-5xl tracking-wider mb-5 text-center">Projects</div>
		  </div>
      </section>
    </HomeLayout>
  )
}

export default IndexPage
