import React from "react";
import styles from "../styles/Hero.module.css";

function Hero(props) {
    return (
        <div className='container mx-auto bg-gray-700 rounded-xl shadow border p-8 m-10'>
            <h1 className="text-3xl text-white font-bold mb-5">Hero Component</h1>
        </div>
    )
}

export default Hero;