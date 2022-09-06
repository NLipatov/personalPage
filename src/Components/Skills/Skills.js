import "./Skills.css";
import useOnScreen from "../../Hooks/useOnScreen";
import { useRef } from "react";
import Declarator from "../ComponentDeclarator/Declarator";
import SingleSkill from "./SingleSkill/SingleSkill";
import sortArray from 'sort-array';

const Skills = ({skillsVisible, skillsNotVisible}) => {
    const ref = useRef();
    const isSkillsVisible = useOnScreen(ref);

    const progressAnimationPlayed = useRef(false);
    
    const primarySkillsArray = [
        {
            name: "HTML/CSS",
            percentage: 95,
            id: 0
        },
        {
            name: "С",
            percentage: 50,
            id: 1
        },
        {
            name: "Rust",
            percentage: 55,
            id: 2
        },
        {
            name: "C#",
            percentage: 85,
            id: 3
        },
        {
            name: "TypeScript",
            percentage: 75,
            id: 4
        },
        {
            name: "Python",
            percentage: 75,
            id: 5
        },
        {
            name: "SQL",
            percentage: 75,
            id: 6
        },
    ]

    const secondarySkillsArray = [

        {
            name: "ASP .NET Core Blazor",
            percentage: 95,
            id: 7
        },
        {
            name: "React & React Native",
            percentage: 95,
            id: 8
        },
        {
            name: "Angular",
            percentage: 45,
            id: 9
        },
        {
            name: "ASP .NET Core Web API",
            percentage: 80,
            id: 10
        },
        {
            name: "Entity Framework",
            percentage: 75,
            id: 11
        },
        {
            name: "Git",
            percentage: 77,
            id: 12
        },
        {
            name: "Docker",
            percentage: 73,
            id: 13
        },
    ]

    if(isSkillsVisible){
        skillsVisible();
        if(!progressAnimationPlayed.current){
            const joinedSkillsArray = primarySkillsArray.concat(secondarySkillsArray);
            joinedSkillsArray.forEach((skill) => {
                const skillElement = document.getElementById(skill.id);
                skillElement.style.width = `${skill.percentage}%`;
            })
            progressAnimationPlayed.current = true;
        }
    }
    else{
        skillsNotVisible();
    }

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
            <div className="skillsDescription">
                    <span>
                        This section describes how comfortable it is to me to use listed technologies in development process.
                    </span>
                </div>
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