import "./Skills.css";
import useOnScreen from "../../Hooks/useOnScreen";
import { useRef, useEffect } from "react";
import Declarator from "../ComponentDeclarator/Declarator";
import SingleSkill from "./SingleSkill/SingleSkill";
import sortArray from 'sort-array'

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
            name: "Python",
            percentage: 75
        },
        {
            name: "SQL",
            percentage: 55
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
            percentage: 80
        },
        {
            name: "Entity FrameWork",
            percentage: 75
        },
        {
            name: "Git",
            percentage: 77
        },
        {
            name: "Docker",
            percentage: 73
        },
    ]

    const primarySkillsArraySorted = sortArray(primarySkillsArray, {
        by: 'percentage',
        order: 'desc'
    });

    const secondarySkillsArraySorted = sortArray(secondarySkillsArray, {
        by: 'percentage',
        order: 'desc'
    });

    return (
        <div
        className="Skills"
        ref={ref}>
            <Declarator DeclaratorValue={"Skills"}/>
            <div className="techStack">
                <div className="skillsList">
                    {primarySkillsArraySorted.map((skill, i) => (
                        <SingleSkill SkillObject={skill} key={i}/>
                    ))}
                </div>
                <div className="skillsList">
                    {secondarySkillsArraySorted.map((skill, i) => (
                        <SingleSkill SkillObject={skill} key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;