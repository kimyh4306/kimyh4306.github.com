import React from "react"
import "./sidebar.css"

import yhkim4306 from "../../images/yonghwan.jpg"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={yhkim4306} style={{ maxWidth: `200px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline}</small>
        </div>
    )
}

export default Bio