import React from "react"
import HomeLayout from "../components/HomeLayout"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <HomeLayout visisbleHeader={false}>
      <div className="grid place-items-center min-h-screen">
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          className="w-4/12 flex flex-col p-10 gap-7"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
			 <div className="text-center text-4xl">Let's get in touch!</div>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-solid border-2 border-[#2b2b2b] pt-1 pb-1 pr-3 pl-3 text-sm rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-solid border-2 border-[#2b2b2b] pt-1 pb-1 pr-3 pl-3 text-sm rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="please be nice :)"
              className="border-solid border-2 border-[#2b2b2b] p-3 text-sm rounded-md"
              required
            ></textarea>
          </div>
          <div className="flex">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <button
              type="submit"
              className="border-solid text-white bg-[#2b2b2b] hover:bg-black p-2 pr-5 pl-5 rounded-md transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </HomeLayout>
  )
}

export default Contact
