import { HiOutlineDesktopComputer } from "react-icons/hi"
import {
  AiFillGithub,
} from "react-icons/ai"
import React from 'react';

const ProjectCard = ({ pathToImg, title, desc, builtInfo, demoLink, githubLink }) => {
	return (
		<div className="border-solid border-4 border-[#2b2b2b] w-80 h-[32rem] rounded-xl flex flex-col p-4 hover:bg-[#2b2b2b] hover:text-white transition-colors duration-500">
			<div className="flex flex-col flex-0 justify-start items-center">
				<img
					className="shadow-sm mb-3 rounded-t-md"
					src={pathToImg}
					alt=""
				/>
			</div>
			<div className="flex flex-col justify-start">
				<h4 className="mb-1 text-lg leading-5">{title}</h4>
				<p className="mb-0 text-sm">{desc}</p>
			</div>
			<div className="flex flex-1 mt-3 items-start justify-start">
				<b>{builtInfo}</b>
			</div>
			<div className="flex flex-row justify-center items-end">
				<a
					className="flex flex-1 justify-center"
					target="_blank"
					href={demoLink}
				>
					<span className="grid place-content-center mr-1">
						<HiOutlineDesktopComputer />
					</span>
					Live Demo
				</a>
				<a
					className="flex flex-1 justify-center"
					target="_blank"
					href={githubLink}
				>
					<span className="grid place-content-center mr-1">
						<AiFillGithub />
					</span>
					GitHub
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
