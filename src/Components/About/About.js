import "./About.css";
import useOnScreen from "../../Hooks/useOnScreen";
import React, {useRef} from "react";
import Declarator from "../ComponentDeclarator/Declarator";
import moment from "moment";

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
                <img className="AboutPhoto photo" src={"https://i.ibb.co/h1Nm0Mk/IMG-1912.jpg"} alt={"Nikita Lipatov"}/>
            </div>
            <div className="TextContainer">
                <h4>
                    My name is <span>Nikita</span>
                </h4>
                <span>
                    I do both frontend and backend development. I really love my occupation and therefore practice my programming skills every day. I am focused on my professional development and I will be happy to solve problems of any level of complexity for your business.
                </span>
                <div className="BottomText">
                    <h4>
                        Age: <span>
                            {moment().diff('1997-08-25', 'years')}
                        </span>
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