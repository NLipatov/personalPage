import "./Home.css";
import profilePicture from "../../img/photo5463225416312535627.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from "react";

const Home = ({setAboutVisibility}) => {
    const downArrows = <FontAwesomeIcon icon={faAngleDoubleDown} />
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
            </div>
            <div className="PhotoContainer">
                <img className="profilePicture" src={profilePicture}/>
            </div>
            <div className="downArrowsDiv">
                {!isaboutVisible ? downArrows : null}
            </div>
        </div>
    )
}

export default Home;