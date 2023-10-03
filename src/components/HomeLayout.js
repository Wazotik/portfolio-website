import * as React from "react"
import "./layout.css"
import Footer from "./Footer.js"
import Header from "./header.js"

const HomeLayout = ({ children, visisbleHeader }) => {
	if (typeof window !== "undefined") {
		require("smooth-scroll")('a[href*="#"]')
	}
	return (
		<div className="flex flex-col min-h-screen font-karla scroll-smooth animate-fadeIn overflow-x-hidden w-[100%]">
			{visisbleHeader ? <Header /> : <></>}
			<div className="flex-1">{children}</div>
			{visisbleHeader ? <Footer /> : <></>}
		</div>
	)
}

export default HomeLayout
