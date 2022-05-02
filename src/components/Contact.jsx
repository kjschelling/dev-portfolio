import React from "react"
import { useState } from "react";
import ContactForm from "./ContactForm";

function Contact(props) {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <div className="container p-10 text-left mx-auto width-3/4 m-12">
            <div className='container text-white text-3xl full'>
                <hr className="m-3" />
                <h2 className="float-left mb-3"> .04 Let's connect </h2>
            </div>

            <div className="container">
                <h2 className='text-white text-2xl full text-center'>
                    Get in touch!
                </h2>
                <p className="text-white">Whether it be potiential job opporounities, project ideas, mentoring or just to chat about the tech space, I'd love to keep in touch! I'm a curious human who loves all things technology and art, follow me on Github and Twitter to keep in touch!</p>
                <button onClick={setShowContactForm(true)} className="border rounded text-white m-3 p-3" >Say Hello :)</button>
            </div>
            <ContactForm show={showContactForm} setShowContactForm={setShowContactForm} />
        </div>
    )
}

export default Contact;