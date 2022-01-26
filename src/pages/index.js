import * as React from "react"
import { useState } from "react";
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
        <div className="text-white tracking-wider w-6/12 grid place-content-center text-center">
          <div className="text-6xl uppercase tracking-widest">
            Wahaj Haider
          </div>
          <div className="text-2xl pl-11 pr-11">Aspiring full stack developer who loves to create and innovate</div>
        </div>
      </div>
      <section
        id="about"
        className="bg-[#2b2b2b] flex justify-center items-center"
      >
        <div className="w-8/12 flex flex-row justify-center items-center pt-20 pb-20 pr-40 pl-40 gap-20">
          <div className="grid place-content-center">
            <img
              src={require("../images/wahaj-face-pic.jpg").default}
              alt=""
              className="max-w-[300px] rounded-2xl m-0"
            />
          </div>
          <div className="grid place-content-center">
            <p className="m-0 text-white text-lg">
					Hey there! I'm Wahaj Haider, a second year computer science co-op
					student at Ryerson University. I first got interested in the field
					of computer science when taking an Introduction to Java class in
					my junior year of high school and ever since then I've been
					growing my skills by exploring different fields and absorbing
					knowledge from courses I've taken during university.
            </p>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}

export default IndexPage
