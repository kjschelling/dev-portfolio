import React from "react"
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

function Experience(props) {
    return (
        <div className="container p-10 text-left mx-auto width-3/4 m-12 ">
            <div className=' container text-white text-3xl full'>
                <hr className="m-3" />
                <h2 className="float-left mb-3 "> .02 Where I've worked </h2>
            </div>

            <div className="container inline-block">
                <Tab.Group>
                    <Tab.List>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'm-2 p-2 bg-white rounded text-black' : 'm-2 p-2 bg-blue-500 text-white'
                                    }
                                >
                                    Digitizing.io
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'm-2 p-2 bg-white rounded text-black' : 'm-2 p-2 bg-blue-500 text-white'
                                    }
                                >
                                    Pedestal
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'm-2 p-2 bg-white rounded text-black' : ' m-2 p-2 bg-blue-500 text-white'
                                    }
                                >
                                    General Assembly
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'm-2 p-2 bg-white rounded text-black' : 'm-2 p-2 bg-blue-500 text-white'
                                    }
                                >
                                    Contract Work
                                </button>
                            )}
                        </Tab>

                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel><div className="container text-white">
                            <h3 className=" m-5 text-xl">Web3 Engineer</h3>
                            <p className="text-lg mx-5">Built multiple websites ingrating Etheruem and Kalyton blockchain allowing users to connect and mint NFTs on the website.</p>
                        </div></Tab.Panel>
                        <Tab.Panel>
                            <div className="container text-white">
                                <h3 className="m-5 text-xl">Software Engineer</h3>
                                <p className="text-lg mx-5">Built multiple websites ingrating Etheruem and Kalyton blockchain allowing users to connect and mint NFTs on the website.</p>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>

                            <div className="container text-white">
                                <h3 className="m-5 text-xl" >Freelance Development & Design</h3>
                                <p className="text-lg mx-5">Built multiple websites ingrating Etheruem and Kalyton blockchain allowing users to connect and mint NFTs on the website.</p>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}

export default Experience;