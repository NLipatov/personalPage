import "./Home.css";
import profilePicture from "../../img/photo5463225416312535627.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState, useRef} from "react";
import useOnScreen from "../../Hooks/useOnScreen";


const Home = () => {
    const ref = useRef();
    const isHomeVisible = useOnScreen(ref);
    const targetElement = document.getElementById("NavBarHomeLink");
    if(isHomeVisible){
        if(targetElement){
            targetElement.style.color = "#BC8CF2";
        }
    }
    else{
        if(targetElement){
            document.getElementById("NavBarHomeLink").style.color = "white";
        }
    }

    const userIcon = <FontAwesomeIcon icon={faUser} style={{fontSize: "21pt" }}/>
    const downArrowsIcon = <FontAwesomeIcon icon={faAngleDoubleDown} />

    return (
        <div className="Home" id="home" ref={ref}>
            <div className="ShortInfo">
                <span>
                    Hi there!
                </span>
                <div className="introduction">
                    <span>
                        I'm a 
                    </span>
                    <span>
                        Web Developer
                    </span>
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
                <img className="profilePicture" src={profilePicture}/>
            </div>
            <div className="downArrowsDiv">
                {downArrowsIcon}
                {/* {!isaboutVisible ? downArrowsIcon : null} */}
            </div>
        </div>
    )
}

export default Home;