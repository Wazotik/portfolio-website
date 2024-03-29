import React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BiMenu, BiArrowBack } from "react-icons/bi"
import { ImCross} from "react-icons/im"
import { Fade } from "react-awesome-reveal"
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [scrollPositionY, setScrollPositionY] = useState(0);

	useScrollPosition(({ prevPos, currPos }) => {
		setScrollPositionY(currPos.y);
	})

	return (
		<>
			<nav className="fixed text-white w-[100%] flex flex-1 justify-start lg:pr-10 lg:pl-10" style={{
				boxShadow: scrollPositionY < -800 ? "0 2px 2px -2px rgba(0,0,0,0.5)" : "none",
				backgroundColor: scrollPositionY < -800 ? "white" : "transparent",
				zIndex: "50",
			}}>
				<div className="w-[100%]">
					<Fade direction="down" className="w-[100%]">
						<ul className="hidden w-[100%] lg:flex justify-around items-center m-0 text-lg" style={{
							color: scrollPositionY < -800 ? "#2b2b2b" : "white",
							height: scrollPositionY < -800 ? "4rem" : "6rem",
							transition: "all 0.2s ease-in-out",
						}}>
							<div className="flex flex-1 justify-around">
								<li className="hidden xl:block m-0">
									<a className="" href="#home">
										Wahaj Haider
									</a>
								</li>
								<li className=" m-0">
									<a href="#about">About</a>
								</li>
								<li className=" m-0">
									<a href="#projects">Projects</a>
								</li>
								<li className=" m-0">
									<a href="#skills">Skills</a>
								</li>
								<li className=" m-0">
									<a href="#work">Work</a>
								</li>
							</div>
							<div className="flex flex-1"></div>
							<div className="flex flex-1 justify-end">
							<li className="m-0">
								<Link
									className="text-white border-solid bg-[#2b2b2b]/80 hover:bg-[#2b2b2b] p-2 pr-5 pl-5 rounded-md transition-colors duration-300"
									href="/contact"
									style={{

									}}
								>
									Contact
								</Link>
							</li>
							</div>
						</ul>
					</Fade>
					<div className="lg:hidden flex items-center justify-end mt-3 mb-3 mr-3 cursor-pointer" style={{
						color: scrollPositionY < -800 ? "#2b2b2b" : "white",
					}}>
						<BiMenu onClick={() => {setSidebarOpen(!sidebarOpen)}} size={46} />
					</div>
				</div>
				
				<div className={`top-0 right-0 fixed bg-[#2b2b2b] w-[100vw] h-screen ${sidebarOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300`}>
					<div className="w-full h-screen p-7 flex flex-col">
						<div className="flex justify-end cursor-pointer">
							<ImCross className="" onClick={() => {setSidebarOpen(!sidebarOpen)}} size={26} />
						</div>
						<div className="w-full flex flex-1 justify-center items-start text-center text-3xl mt-14">
							<ul className="m-0 flex flex-col gap-14">
								<li className="">
									<a className="" href="#home" onClick={() => setSidebarOpen(!sidebarOpen)}>
										Home
									</a>
								</li>
								<li className="">
									<a href="#about" onClick={() => setSidebarOpen(!sidebarOpen)}>About</a>
								</li>
								<li className="">
									<a href="#projects" onClick={() => setSidebarOpen(!sidebarOpen)}>Projects</a>
								</li>
								<li className="">
									<a href="#skills" onClick={() => setSidebarOpen(!sidebarOpen)}>Skills</a>
								</li>
								<li className="">
									<a href="#work" onClick={() => setSidebarOpen(!sidebarOpen)}>Work</a>
								</li>
								<li className="">
									<Link
										className=""
										href="/contact"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</nav>
		</>
	)
}

export default Header
