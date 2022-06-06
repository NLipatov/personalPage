import "./Skills.css";
import useOnScreen from "../../Hooks/useOnScreen";
import { useRef, useEffect } from "react";
import Declarator from "../ComponentDeclarator/Declarator";
import SingleSkill from "./SingleSkill/SingleSkill";
import sortArray from 'sort-array';

const Skills = ({skillsVisible, skillsNotVisible}) => {
    const ref = useRef();
    const isSkillsVisible = useOnScreen(ref);

    const progressAnimationPlayed = useRef(false);
    
    const primarySkillsArray = [
        {
            name: "HTML",
            percentage: 95,
            id: 0
        },
        {
            name: "CSS",
            percentage: 85,
            id: 1
        },
        {
            name: "C#",
            percentage: 85,
            id: 2
        },
        {
            name: "JavaScript",
            percentage: 77,
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
            percentage: 55,
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
            percentage: 83,
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

    const targetElement = document.getElementById("NavBarAboutLink")
    if(isSkillsVisible){
        skillsVisible();
        // if(targetElement){
        //     targetElement.style.color = "#BC8CF2";
        // }
        if(!progressAnimationPlayed.current){
            console.log("playing progress animation");
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
        // if(targetElement){
        //     targetElement.style.color = "white";
        // }
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