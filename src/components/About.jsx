import React from "react";
import kjcodeheadshot from "../images/kjcodeheadshot.png";
import styles from "../styles/About.module.css";

function About(props) {
    return (
        <div className="container p-10 text-left mx-auto width-3/4 m-12 ">
            <div className=' container text-white text-3xl full'>

                <h2 className="float-left mb-3 "> .01 What I do </h2>
            </div>


            <div className="container flex flex-wrap-wrap">
                <div className='text-white  full text-center '>
                    <br />
                    <strong className=" text-3xl">Everything in software engineering is about data and patterns.</strong>
                    <br />
                    <br />
                    <ul className="text-xl">
                        <li>What's the data you need most? </li>
                        <li>What's the best structure for your use case? </li>
                        <li>How does the frontend access the data, pass and manipulate the data?</li>
                        <br />
                    </ul>

                    <p className="text-2xl">I build responsive and optimized full stack web applications with data, patterns, and UX/UI design principles in mind.
                        <br />
                        <br />
                        I help startups at mutliple stages with product development, devOps, software engineering mentoring, web3 engineering and optimizing procedures and protocols for both internal and external use.</p>
                </div>
                <img src={kjcodeheadshot} className={styles.headshot} />
            </div>

            <div className="container m-5 mt-10 full text-center text-2xl text-white">
                <p>Recent technologies I worked with:</p>
                <div className="container full ">
                    <div className="my-10 flex">
                        <ul>
                            <li>Javascript (ES6+)</li>
                            <li>React</li>
                            <li>Typscript</li>
                            <li>AWS</li>
                        </ul>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About;