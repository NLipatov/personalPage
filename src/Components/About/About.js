import "./About.css";
import AboutPicture from "../../img/photo5463225416312535572.jpg";
import useOnScreen from "../../Hooks/useOnScreen";
import React, {useRef} from "react";

const About = ({onAboutVisible, onAboutNotVisible}) => {
    const ref = useRef();
    const isAboutVisible = useOnScreen(ref);

    if(isAboutVisible){
        onAboutVisible();
    }
    else{
        onAboutNotVisible();
    }

    return ( 
        <div className="About visual_component" id="about" ref={ref}>
            <div className="aboutPhotoContainer">
                <img className="AboutPhoto photo" src={AboutPicture} alt={"Nikita Lipatov"}/>
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
                        Minor roles: <span>iOS</span> and <span>Android</span> developer, <span>DevOps</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default About;