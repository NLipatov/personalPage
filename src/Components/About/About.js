import "./About.css";
import AboutPicture from "../../img/photo5463225416312535572.jpg";
import useOnScreen from "../../Hooks/useOnScreen";
import React, {useRef} from "react";

const About = ({aboutVisible, aboutNotVisible}) => {
    const ref = useRef();
    const isSkillsVisible = useOnScreen(ref);

    if(isSkillsVisible){
        aboutVisible();
    }
    else{
        aboutNotVisible();
    }
    return ( 
        <div className="About" id="about" ref={ref}>
            <div style={{minWidth: '320px'}} className="PhotoContainer">
                <img className="profilePicture aboutPhotoContainer" src={AboutPicture} alt={"Nikita Lipatov"}/>
            </div>
            <div className="TextContainer">
                <h4>
                    My name is <span>Nikita</span>
                </h4>
                <span>
                    I'm a fullstack web developer. My first application was a desktop software for searching an unique taxpayer ID in open government tax service web-site.
                </span>
                <div className="BottomText">
                    <h4>
                        Age: <span>24</span>
                    </h4>
                    <h4>
                        Language: <span>English, Russian</span>
                    </h4>
                    <h4>
                        City: <span>Klin, Moscow Region</span>
                    </h4>
                    <h4>
                        Major roles: <span>Fullstack web-developer</span>
                    </h4>
                    <h4>
                        Minor roles: <span>Mobile and Desktop developer, DevOps</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default About;