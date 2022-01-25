import React from "react"
import HomeLayout from "../components/HomeLayout"

const Projects = () => {
	return (
		<HomeLayout>
			<div>Projects</div>
			<img className="w-[100vw]" src={require("../images/wahaj-pic2.png").default} alt="" />
		</HomeLayout>
	)
}

export default Projects
