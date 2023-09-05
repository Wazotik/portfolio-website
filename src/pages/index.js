import * as React from "react"

import HomeLayout from "../components/HomeLayout"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"
import { Helmet } from "react-helmet"
import { Fade } from "react-awesome-reveal"
import ProjectCard from "../components/ProjectCard"

const heartWatchScreenshot =
  require("../images/heart-watch-screenshot-min.jpg").default
const reactGuideScreenshot =
  require("../images/react-guide-screenshot-min.jpg").default
const spacestgramScreenshot =
  require("../images/spacestagram-screenshot-min.jpg").default
const keyboardMarketScreenshot =
  require("../images/keyboard-market-screenshot-min.jpg").default

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
        style={{zIndex: "1"}}
      >
        <div className="flex main-container"></div>
        <div className="flex justify-center items-center w-5/12 name-container">
          <div className="text-white grid place-content-center text-center">
            <h1 className="text-5xl md:text-6xl uppercase tracking-widest shadow-sm font-normal m-0 font-karla">
              Wahaj Haider
            </h1>
            {/* <div className="text-2xl tracking-wide">
              Aspiring Full Stack Developer with a passion to create and
              innovate
            </div> */}
          </div>
        </div>
        <div className="flex justify-end items-center main-container">
          <div className="flex flex-row md:flex-col gap-10 mb-5 md:mb-0 md:mr-5 items-center text-3xl">
            <a target="_blank" href="https://github.com/Wazotik">
              <AiOutlineGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/wahajh/">
              <AiOutlineLinkedin />
            </a>
            <a target="_blank" href="https://www.instagram.com/wahaj.haider21/">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="bg-[#2b2b2b] flex justify-center items-center text-white font-karla"
      >
        <div className="w-10/12 xl:w-8/12 flex flex-col lg:flex-row xl:flex-row justify-center items-center pt-24 pb-14 2xl:pt-40 2xl:pb-40 gap-14 lg:gap-20 lg:mt-20 lg:mb-20">
          <div className="grid place-content-center">
            <img
              src={require("../images/wahaj-face-pic-min.jpg").default}
              alt=""
              className="max-w-[300px] md:max-w-[350px] rounded-2xl m-0 shadow-2xl"
            />
          </div>
          <div>
            <div className="text-center lg:text-left text-4xl lg:text-5xl tracking-wider mb-3 md:mb-4">
              <Fade direction="down">
                <div>About Me</div>
              </Fade>
            </div>
            <Fade direction="up">
              <div className="text-left text-md md:t/ext-lg grid place-content-center">
                <p className="text-white tracking-wide mb-3 md:mb-2">
                  Hey there! I'm <b>Wahaj Haider</b>, a third year computer
                  science co-op student at Toronto Metropolitan University
                  (formerly Ryerson University). I was first introduced to the
                  world of programming during my junior year of high school, and
                  ever since then, I've been hooked. I love being able to create
                  something out of nothing and doing it so for the
                  benefit/entertainment of others takes it to a whole new level.
                </p>
                <p className="text-white tracking-wide mb-2">
                  I've taken a special interest in <b>web development</b> and have had
                  a lot of fun building web applications using
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
        <div className="w-11/12 flex flex-col justify-center items-center pt-24 pb-14 md:pt-24 md:pb-24 gap-10 lg:mt-10 lg:mb-16">
          <Fade direction="left">
            <div className="text-5xl tracking-wider lg:mb-5 text-center">
              Projects
            </div>
          </Fade>

          {/* <Fade direction="up"> */}
            <div className="inline-grid w-full gap-0 gap-y-10 grid-cols-1 place-items-center xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2">
              <ProjectCard
                pathToImg={keyboardMarketScreenshot}
                title={"Keyboard Market"}
                desc={
                  "App enablings users (and myself) to explore a wide variety of mechanical keyboard products. Users can search, filter, sort and soon see reviews of products to make the search for their favourite keyboard(s) that much e.er :) Keyboard data is web-scraped from mechanicalkeyboards.com"
                }
                builtInfo={
                  "Built using React, Express.js, JavaScript, HTML, CSS, MySQL, and Puppeteer."
                }
                demoLink={"https://keyboard-market.netlify.app/"}
                githubLink={
                  "https://github.com/Wazotik/keyboard-market"
                }
              />

              <ProjectCard
                pathToImg={reactGuideScreenshot}
                title={"Weather app (inside React and Express Guide"}
                desc={
                  "A full-stack application proving users real-time weather data based on their location. This was a demo page for a school project, serving as a beginner's guide to React.js and Express.js."
                }
                builtInfo={
                  "Built using React, Express.js, JavaScript, HTML, CSS, and the OpenWeatherMap API."
                }
                demoLink={"https://cps530-final-project.netlify.app/demo"}
                githubLink={
                  "https://github.com/Ghazalmir/React-and-Express-Guide"
                }
              />

              <ProjectCard
                pathToImg={heartWatchScreenshot}
                title={"Heart-Watch"}
                desc={
                  "This website provides an overview for Heart-Watch, a mobile application providing a modern solution for cardiovascular disease prevention and protection. This was used as a demo page for our hack in DeltaHacks8."
                }
                builtInfo={"Built using JavaScript, Gatsby (React), HTML, and CSS."}
                demoLink={"https://heartwatch.tech/"}
                githubLink={
                  "https://github.com/Wazotik/heart-watch-DeltaHacks8-2021"
                }
              />

              <ProjectCard
                pathToImg={spacestgramScreenshot}
                title={"Spacestagram"}
                desc={
                  "Web app that makes use of NASA's Astrology Picture of the Day Image API to display likeable collections of images alongside their appropriate metadata."
                }
                builtInfo={
                  "Built using JavaScript, React, Express.js, HTML, CSS."
                }
                demoLink={"https://spacestagram-wahaj.netlify.app/"}
                githubLink={
                  "https://github.com/Wazotik/spacestagram-shopify-challenge"
                }
              />
            </div>
          {/* </Fade> */}
        </div>
      </section>

      <section
        id="skills"
        className="flex justify-center items-center bg-gray-800 text-white"
      >
        <div className="w-11/12 flex flex-col pt-14 pb-14 md:pt-24 md:pb-24 gap-10 lg:mt-16 lg:mb-16">
          <div className="flex flex-1 pl-52">
            <Fade direction="right">
              <div className="text-5xl tracking-wider lg:mb-5 text-left ">
                Skills
              </div>
            </Fade>
          </div>

          <div className="flex flex-1 justify-center">
            <h3>Under construction</h3>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}

export default IndexPage
