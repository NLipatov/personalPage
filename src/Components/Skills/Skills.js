import "./Skills.css";
import useOnScreen from "../../Hooks/useOnScreen";
import { useRef, useEffect } from "react";

const Skills = ({skillsVisible, skillsNotVisible}) => {
    const ref = useRef();
    const isSkillsVisible = useOnScreen(ref);

    if(isSkillsVisible){
        skillsVisible();
    }
    else{
        skillsNotVisible();
    }


    return (
        <div
        className="Skills"
        ref={ref}>
            <span>
                I'm Skills
            </span>
        </div>
    )
}

export default Skills;