import React from "react";
import styles from "../styles/Hero.module.css";

function Hero(props) {
    return (
        <div className='container text-left text-white mx-auto bg-gray-800 rounded-xl shadow  p-8 m-10'>
            <h1 className="text-4xl  font-bold mb-5">Hi, I'm KJ.</h1>
            <h1 className="text-3xl font-bold ">Software Engineer, Optimization Consultant & occasional designer ;)</h1>
        </div>
    )
}

export default Hero;