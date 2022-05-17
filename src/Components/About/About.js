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
                <img className="profilePicture aboutPhotoContainer" src={AboutPicture}/>
            </div>
            <div className="TextContainer">
                <span>
                    My name is Nikita
                </span>
                <span>
                Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. 
                Recusandae Aut Adipisci Necessitatibus Veniam, Provident Vero Architecto 
                Praesentium, Non Sequi Libero Corrupti Molestias. Architecto 
                Voluptate Eligendi Maiores, Error Magni Accusamus Officia.
                </span>
            </div>
        </div>
    )
}

export default About;