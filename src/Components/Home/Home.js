import "./Home.css";
import profilePicture from "../../img/photo5463225416312535627.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";

const Home = ({setAboutVisibility}) => {
    const userIcon = <FontAwesomeIcon icon={faUser} style={{"fontSize": "21pt" }}/>
    const downArrowsIcon = <FontAwesomeIcon icon={faAngleDoubleDown} />
    useEffect(()=>{
        setAboutVisibility.current = aboutVisible;
    }, []);

    const [isaboutVisible, setAboutVisible] = useState(false);

    const aboutVisible = (argument) => {
        setAboutVisible(argument);
    }
    return (
        <div className="Home">
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
                <a href="#aboutAnchor" className="btn">
                    More info about me
                    {userIcon}
                </a>
            </div>
            <div className="PhotoContainer">
                <img className="profilePicture" src={profilePicture}/>
            </div>
            <div className="downArrowsDiv">
                {!isaboutVisible ? downArrowsIcon : null}
            </div>
            <div id="aboutAnchor" style={{position: "absolute", bottom: "0"}}/>
        </div>
    )
}

export default Home;