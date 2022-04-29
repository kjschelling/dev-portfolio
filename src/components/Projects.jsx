import React from "react"

function Projects(props) {
    return (
        <div className="container bg-gray-700 p-10 text-left mx-auto width-3/4 m-12 shadow-lg ">
            <div className=' container text-white text-3xl full'>
                <hr className="m-3" />
                <h2 className="float-left mb-3 "> .03 Things I've built </h2>
            </div>

            <div className="container flex">
                <div>Klapes.io</div>
                <div>MysticSisterHood.io</div>
                <div>Pedestal</div>
                <div>KJ Project 1</div>
                <div>KJ Project 2</div>
                <div>KJ Project 3</div>
            </div>
        </div>
    )
}

export default Projects;