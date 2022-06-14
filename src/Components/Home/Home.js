import "./Home.css";
import profilePicture from "../../img/HomePicture.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState, useRef} from "react";
import useOnScreen from "../../Hooks/useOnScreen";
import Typed from "typed.js";

const Home = () => {

    const userIcon = <FontAwesomeIcon icon={faUser} style={{fontSize: "21pt" }}/>
    const downArrowsIcon = <FontAwesomeIcon icon={faAngleDoubleDown} />

	const el = React.useRef(null);
    const typed = React.useRef(null);
    useEffect(() => {
        const options = {
        strings: [
            'Web Developer',
            'Mobile Developer',
            '...ehm little bit DevOps',
            'passionate FullStack Developer'
        ],
        typeSpeed: 60,
        backSpeed: 70,
        };

        typed.current = new Typed(el.current, options);
        
        return () => {
        typed.current.destroy();
        }
    }, [])

    return (
        <div className="Home visual_component" id="home">
            <div className="ShortInfo">
                <span>
                    Hi there!
                </span>
                <div className="introduction">
                    <span>
                        I'm a 
                    </span>
                    <span ref={el}/>
                </div>
                <span style={{fontSize: "11pt", marginTop: "10px"}}>
                        Creative Web Developer Offering 2+ Years Of Experience Providing High-Impact Web Solutions For Many Different Organizations.
                </span>
                <a href="#about" className="btn">
                    More info about me
                    {userIcon}
                </a>
            </div>
            <div className="PhotoContainer">
                <img className="profilePicture photo" src={profilePicture}/>
            </div>
            <div className="downArrowsDiv">
                {downArrowsIcon}
                {/* {!isaboutVisible ? downArrowsIcon : null} */}
            </div>
        </div>
    )
}

export default Home;