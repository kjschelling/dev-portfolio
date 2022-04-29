import React from "react";
import github from "../images/icons/github.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";

function Footer(props) {
    return (<div className="full bg-gray-900 h-10">
        <div className="container mx-auto">
            <div className="flex mx-auto mb-2">
                <a><img src={github} className="h-10 w-10" /></a>
                <a><img src={linkedin} className="h-10 w-10" /></a>
                <a><img src={twitter} className="h-10 w-10" /></a>
            </div>

        </div>
    </div>
    )

}
export default Footer;