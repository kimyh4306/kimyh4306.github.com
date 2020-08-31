import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaFreeCodeCamp,
    FaTwitterSquare
} from "react-icons/fa"
import {
    GiBrazil
} from "react-icons/gi"
import {
    AiFillInstagram,
    AiFillFacebook
} from "react-icons/ai"
import {
    SiArxiv,
    SiGooglescholar
} from "react-icons/si"
import "./sidebar.css"

const SocialLinks = ({ contacts }) => {
    return (
        <div className="side-social-links float-left mt-3 mb-3">
            <a className="text-secondary p-2"
                href={contacts.github}>
                <span title="GitHub">
                    <SiGooglescholar size={26} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.stackoverflow}>
                <span title="Stack Overflow">
                    <AiFillFacebook size={26} style={{ color: "skyblue" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.twitter}>
                <span title="Twitter">
                    <SiArxiv size={26} style={{ color: "secondary" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks