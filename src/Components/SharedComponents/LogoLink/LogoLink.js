import "./LogoLink.css";
import React from "react";

const LogoLink = ({icon, link, linkText, additionalDescription}) => {
    return (
        <div className="LogoItem">
            <span className="LogoIcon">
                <a href={link}>
                    {icon}
                </a>
            </span>
            <div className="LogoItemInfo">
                <a href={link}>
                    {linkText}
                </a>
                <span>
                    {additionalDescription}
                </span>
            </div>
        </div>
    )
}

export default LogoLink;