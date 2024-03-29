import * as React from "react"
import { useState, useEffect } from "react"

import HomeLayout from "../components/HomeLayout"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"
import { Helmet } from "react-helmet"
import { Fade } from "react-awesome-reveal"
import ProjectCard from "../components/ProjectCard"

import HtmlLogo from "../images/html5-logo.svg";
import JSLogo from "../images/javascript-logo.svg";
import JavaLogo from "../images/java-logo.svg";
import PythonLogo from "../images/python-logo.svg";
import CssLogo from "../images/css-logo.svg";
import ReactLogo from "../images/react-logo.svg";
import ExpressLogo from "../images/express-logo.svg";
import BootstrapLogo from "../images/bootstrap-logo.svg";
import GatsbyLogo from "../images/gatsby-logo.svg";
import TailwindLogo from "../images/tailwind-logo.svg";


const heartWatchScreenshot =
  require("../images/heart-watch-screenshot-min.jpg").default
const reactGuideScreenshot =
  require("../images/react-guide-screenshot-min.jpg").default
const spacestgramScreenshot =
  require("../images/spacestagram-screenshot-min.jpg").default
const keyboardMarketScreenshot =
  require("../images/keyboard-market-screenshot-min.jpg").default

const languageNameAndIcon = {
	Java: <img src={JavaLogo} alt="java logo" className="mb-0" />,
	JavaScript: <img src={JSLogo} alt="javascript logo" className="mb-0" />,
	HTML5: <img src={HtmlLogo} alt="html logo" className="mb-0" />,
	CSS3: <img src={CssLogo} alt="css logo" className="mb-0" />,
	Python: <img src={PythonLogo} alt="python logo" className="mb-0" />,
};

const frameworkNameAndIcon = {
	React: <img src={ReactLogo} alt="react logo" className="mb-0" />,
	Express: <img src={ExpressLogo} alt="react logo" className="mb-0" />,
	Gatsby: <img src={GatsbyLogo} alt="react logo" className="mb-0" />,
	Tailwind: <img src={TailwindLogo} alt="react logo" className="mb-0" />,
	Bootstrap: <img src={BootstrapLogo} alt="react logo" className="mb-0" />,
};

const projectObjs = [
	{
		title: "KMarket",
		pathToImg: keyboardMarketScreenshot,
		generalDesc: "Web app enabling users to explore a wide variety of mechanical keyboards. Users can search, filter, sort and see reviews to make the search for their favourite keyboard(s) that much easier :)",
		moreInfoDesc: "yap",
		builtInfo: "Built using React, Express.js, MySQL, JavaScript, HTML, CSS, and Puppeteer.",
		demoLink: "https://keyboard-market.netlify.app/",
		githubLink: "https://github.com/Wazotik/keyboard-market",
		progressStatus: "building",
	},
	{
		title: "Weather App",
		pathToImg: reactGuideScreenshot,
		generalDesc: "Web app using the OpenWeatherMap API to provide users real-time weather data and weekly forecasts based on their location.",
		moreInfoDesc: " This was a demo page for a school project, serving as a beginner's guide to React.js and Express.js.",
		builtInfo: "Built using React, Express.js, JavaScript, HTML, CSS.",
		demoLink: "https://cps530-final-project.netlify.app/demo",
		githubLink: "https://github.com/Ghazalmir/React-and-Express-Guide",
		progressStatus: "finished",
	},
	{
		title: "Heart-Watch",
		pathToImg: heartWatchScreenshot,
		generalDesc: "Website providing an overview for Heart-Watch, a mobile application providing a modern solution for cardiovascular disease prevention and protection. This was used as a demo page for the DeltaHacks8 hackathon.",
		moreInfoDesc: "yap",
		builtInfo: "Built using JavaScript, Gatsby (React), HTML, and CSS.",
		demoLink: "https://heartwatch.tech/",
		githubLink: "https://github.com/Wazotik/heart-watch-DeltaHacks8-2021",
		progressStatus: "finished",
	},
	{
		title: "Spacestagram",
		pathToImg: spacestgramScreenshot,
		generalDesc: "Web app that makes use of NASA's Astrology Picture of the Day Image API to display likeable collections of images alongside their appropriate metadata.",
		moreInfoDesc: "yap",
		builtInfo: "Built using JavaScript, React, Express.js, HTML, CSS.",
		demoLink: "https://spacestagram-wahaj.netlify.app/",
		githubLink: "https://github.com/Wazotik/spacestagram-shopify-challenge",
		progressStatus: "finished",
	},
];


const IndexPage = () => {
	const [projectElems, setProjectElems] = useState([]);
	const [filterOption, setFilterOption] = useState("");

	useEffect(() => {
		setProjectElems(projectObjs.map((project) => {
			return (
				<ProjectCard 
					pathToImg={project.pathToImg}  
					title={project.title}
					generalDesc={project.generalDesc}
					moreInfoDesc={project.moreInfoDesc}
					builtInfo={project.builtInfo}
					demoLink={project.demoLink}
					githubLink={project.githubLink}
					progressStatus={project.progressStatus}
				/>
			);
		}));
	}, []);


	/*
		Filter projects based on where they are in the development process
	*/
	const filterProjects = (filter) => {
		setFilterOption(filter);
		let filteredProjects = projectObjs;
		if (filter === "all") {
			filteredProjects = projectObjs;
		}
		else if (filter === "finished") {
			filteredProjects = filteredProjects.filter((project) => project.progressStatus === "finished");
		}
		else if (filter === "building") {
			filteredProjects = filteredProjects.filter((project) => project.progressStatus === "building");
		}
		else if (filter === "upcoming") {
			filteredProjects = filteredProjects.filter((project) => project.progressStatus === "upcoming");
		}
		else {
			console.error("INCORRECT FILTER SELECTION");
		}

		setProjectElems(filteredProjects.map((project) => {
			return (
				<ProjectCard 
					pathToImg={project.pathToImg}  
					title={project.title}
					generalDesc={project.generalDesc}
					moreInfoDesc={project.moreInfoDesc}
					builtInfo={project.builtInfo}
					demoLink={project.demoLink}
					githubLink={project.githubLink}
					progressStatus={project.progressStatus}
				/>
			);
		}));
	}

	
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
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Helmet>

			<div
				id="home"
				className="hero-section min-h-screen w-[100%] object-contain flex flex-col md:flex-row justify-center items-center text-white"
				style={{ zIndex: "1" }}
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
				className="bg-[#2b2b2b] flex justify-center items-center text-white font-karla lg:min-h-screen md:min-h-screen sm:h-96 w-full" 
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
									Hey there! I'm <b>Wahaj Haider</b>, a fourth year computer
									science co-op student at Toronto Metropolitan University
									(formerly Ryerson University). I was first introduced to the
									world of programming during my junior year of high school, and
									ever since then, I've been hooked. I love being able to create
									something out of nothing and doing so for the
									benefit/entertainment of others takes it to a whole new level.
								</p>
								<p className="text-white tracking-wide mb-2">
									I've taken a special interest in <b>web development</b> and
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
				className="bg-white flex justify-center items-start min-h-screen"
			>
				<div className="w-11/12 flex flex-col justify-center items-center pt-24 pb-14 md:pt-24 md:pb-24 lg:gap-10 gap-5 lg:mt-10 lg:mb-16">
					<div className="relative w-full lg:mb-10 md:mb-10 sm:flex sm:flex-col">

						<div className="flex justify-center">
							<Fade direction="left">
								<div className="text-5xl tracking-wider text-center">
									Projects
								</div>
							</Fade>
						</div>
						<div className="lg:pl-8 lg:absolute lg:left-0 flex justify-center lg:mt-4 mt-10">
							<select value={filterOption} defaultValue="all" onChange={(event) => filterProjects(event.target.value)} className="border-2 border-[#2b2b2b] text-gray-900 text-sm rounded-md p-2.5" name="project-status" id="project-status">
								<option value="all">all</option>
								<option value="finished">finished</option>
								<option value="building">"finished"</option>
								<option value="upcoming">upcoming</option>
							</select>
						</div>

					</div>
					<div className="inline-grid w-full gap-0 gap-y-10 grid-cols-1 place-items-center xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2">
						{projectElems}
					</div>
				</div>
			</section>

			<section
				id="skills"
				className="flex justify-center items-center bg-gray-800 text-white box-border"
			>
				<div className="w-11/12 flex flex-col pt-24 pb-14 md:pt-24 md:pb-24 gap-10 lg:mt-16 lg:mb-16">
					<div className="flex flex-1 lg:justify-start md:justify-start justify-center lg:pl-52 md:pl-52">
						<Fade direction="right">
							<div className="text-5xl tracking-wider lg:mb-4 text-center ">
								Skills
							</div>
						</Fade>
					</div>

					<div className="flex flex-col items-center">
						<Fade direction="up">
							<div className="tracking-wider text-2xl lg:text-4xl text-center mb-8">Languages</div>

							<div className="flex flex-row flex-wrap justify-center mb-5">
								{
									Object.entries(languageNameAndIcon).map(([techName, techIcon]) => {
										return (
											<div key={techName} className="lg:w-44 lg:h-44 h-32 w-44 flex justify-center items-center flex-col">
												<div className="flex justify-center lg:w-20 w-14">
													{techIcon}
												</div>
												<div className="mt-2 text-center lg:text-lg text-base">
													{techName}
												</div>
											</div>
										)
									})
								}
							</div>
						</Fade>

						<Fade direction="up">
							<div className="tracking-wider text-2xl lg:text-4xl text-center mb-8">Frameworks/Libraries</div>

							<div className="flex flex-row flex-wrap justify-center mb-5">
								{
									Object.entries(frameworkNameAndIcon).map(([techName, techIcon]) => {
										return (
											<div key={techName} className="lg:w-44 lg:h-44 h-32 w-44 flex justify-center items-center flex-col">
												<div className="flex justify-center lg:w-20 w-14">
													{techIcon}
												</div>
												<div className="mt-2 text-center lg:text-lg text-base">
													{techName}
												</div>
											</div>
										)
									})
								}
							</div>
						</Fade>
					</div>
				</div>
			</section>
		</HomeLayout>
	)
}

export default IndexPage
