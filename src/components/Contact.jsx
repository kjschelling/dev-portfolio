import React from "react"

function Contact(props) {
    return (
        <div className="container bg-gray-700 p-10 text-left mx-auto width-3/4 m-12 shadow-lg ">
            <div className=' container text-white text-3xl full'>
                <hr className="m-3" />
                <h2 className="float-left mb-3 "> .01 About Me </h2>
            </div>

            <div className="container flex">
                <p className='text-white text-2xl full text-center'>I build, optimize and design functional web sites with design principles in mind.
                    My interest in web development started at age 7, when through a Virtual World I was able to customize my own unique space with HTML. I would later be drawn into the magic of web development and start my journey as a software engineer. I am a full stack web developer / software engineer / web3 engineer. I have worked in multiple startups at different stages in their journey. In my experience I have made standards, procedure and protocols for development. I have analyzed and optimized protocols to elleivate bottlenecks.
                </p>
                {/* <img src={} /> */}
            </div>
        </div>
    )
}

export default Contact;