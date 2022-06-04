import "./Skills.css";
import useOnScreen from "../../Hooks/useOnScreen";
import { useRef, useEffect } from "react";
import Declarator from "../ComponentDeclarator/Declarator";
import SingleSkill from "./SingleSkill/SingleSkill";

const Skills = ({skillsVisible, skillsNotVisible}) => {
    const ref = useRef();
    const isSkillsVisible = useOnScreen(ref);

    if(isSkillsVisible){
        skillsVisible();
    }
    else{
        skillsNotVisible();
    }

    const skillsArray = [
        {
            name: "HTML",
            percentage: 95
        },
        {
            name: "CSS",
            percentage: 85
        },
        {
            name: "JavaScript",
            percentage: 77
        },
        {
            name: "TypeScript",
            percentage: 75
        },
        {
            name: "C#",
            percentage: 85
        },
    ]


    return (
        <div
        className="Skills"
        ref={ref}>
            <Declarator DeclaratorValue={"Skills"}/>
            <div className="skillsList">
                {skillsArray.map((skill, i) => (
                    <SingleSkill SkillObject={skill} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default Skills;