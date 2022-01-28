import * as React from "react"
import "./layout.css"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
	if (typeof window !== "undefined") {
		require("smooth-scroll")('a[href*="#"]')
	}
	return (
		<div className="flex flex-col min-h-screen font-karla scroll-smooth animate-fadeIn">
			<Header />
			<div className="flex-1">{children}</div>
			<Footer />
		</div>
	)
};

export default Layout;
