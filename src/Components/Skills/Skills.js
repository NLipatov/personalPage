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

    const primarySkillsArray = [
        {
            name: "HTML",
            percentage: 95
        },
        {
            name: "CSS",
            percentage: 85
        },
        {
            name: "C#",
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
            name: "SQL",
            percentage: 55
        },
        {
            name: "Python",
            percentage: 75
        },
    ]

    const secondarySkillsArray = [

        {
            name: "ASP .NET Core Blazor",
            percentage: 95
        },
        {
            name: "React & React Native",
            percentage: 83
        },
        {
            name: "Angular",
            percentage: 45
        },
        {
            name: "ASP .NET Core Web API",
            percentage: 77
        },
        {
            name: "Entity FrameWork",
            percentage: 75
        },
        {
            name: "Git",
            percentage: 80
        },
        {
            name: "Docker",
            percentage: 73
        },
    ]


    return (
        <div
        className="Skills"
        ref={ref}>
            <Declarator DeclaratorValue={"Skills"}/>
            <div className="techStack">
                <div className="skillsList">
                    {primarySkillsArray.map((skill, i) => (
                        <SingleSkill SkillObject={skill} key={i}/>
                    ))}
                </div>
                <div className="skillsList">
                    {secondarySkillsArray.map((skill, i) => (
                        <SingleSkill SkillObject={skill} key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;