import "./Experience.css";
import Declarator from "../ComponentDeclarator/Declarator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useOnScreen from "../../Hooks/useOnScreen";
import React, { useRef } from "react";

const Experience = () => {


    const briefcaseIcon = <FontAwesomeIcon icon={faBriefcase} />
    const chevronDownIcon = <FontAwesomeIcon icon={faChevronDown} />
    return(
        <div className="Experience visual_component" id="experience">
            <Declarator DeclaratorValue={"Experience"}/>
            <div className="workHistoryItem">
                <span className="briefcaseIcon">
                    {briefcaseIcon}
                </span>
                <div className="timePeriod">
                    <span>06/2020 - 06/2021</span>
                </div>
                <div className="WorkHistoryCompanyBage DHLStyle">
                    <span>DHL Express</span>
                </div>
                <div className="WorkHistoryDescription">
                    <h4>
                        DHL Express — this is the place where my journey to IT started.
                    </h4>
                    <span>
                        From the very first days of work, I began to notice that most of the work can be automated.
                    </span>
                    <span>
                        I started learning programming and after a few weeks I wrote a Python application with 2 Threads: one for graphical user interface and other for controlling headless Chrome with Selenium library.
                    </span>
                    <span>
                        After my first successful experience, I started looking for a job where I would find even more opportunities for my professional development.
                    </span>
                </div>
            </div>
            <div className="workHistoryItem">
                <span className="briefcaseIcon">
                    {briefcaseIcon}
                </span>
                <div className="timePeriod">
                    <span>06/2021 - 09/2021</span>
                </div>
                <div className="WorkHistoryCompanyBage IKEAStyle">
                    <span>IKEA</span>
                </div>
                <div className="WorkHistoryDescription">
                    <h4>
                        IKEA — gorgeous people, great working culture and constant feeling of care from the employer
                    </h4>
                    <span>
                        At IKEA, I participated in the architecture discussion and development of several projects.
                    </span>
                    <span>
                        Although I really liked the relationships in the team and the attitude of the employer to the team, I was not satisfied with the level of complexity of the work I was doing. It was too easy for me...
                    </span>
                    <span>
                        I became interested in web development. I started learning C#. I began to learn how the web works. Soon I received a very tempting and interesting offer
                    </span>
                </div>
            </div>
            <div className="workHistoryItem">
                <span className="briefcaseIcon">
                    {briefcaseIcon}
                </span>
                <div className="timePeriod">
                    <span>09/2021 - 06/2022</span>
                </div>
                <div className="WorkHistoryCompanyBage AGroupStyle">
                    <span>A Group</span>
                </div>
                <div className="WorkHistoryDescription">
                    <h4>
                        It was it. The job I was dreamed of for past 2 year!
                    </h4>
                    <span>
                        In A Group we had a small development team of 5 people. All the guys except me had more than 10 years of programming experience. They all were like demigods from my perspective.
                    </span>
                    <span>
                        Absolutely everything that I have been studying for the last six months was necessary for me when working at this place. And it wasn't even enough! I eagerly read and studied new technologies.
                    </span>
                    <span>
                        Six months after the start of my work, terrible events began, which still shake the world community and take the lives of hundreds of people every day. Because of these events, I started looking for a remote job that would allow me to relocate to another country. All my childhood, school, university times have been overshadowed by the terrible deeds of my country. It was unbearably disgusting to stay here
                    </span>
                </div>
            </div>
            <div className="workHistoryItem">
                <span className="briefcaseIcon">
                    {briefcaseIcon}
                </span>
                <div className="timePeriod">
                    <span>since 06/2022</span>
                </div>
                <div className="WorkHistoryCompanyBage">
                    <div className="DynamicSunStyle">
                        <span>DynamicSun</span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
                <div className="WorkHistoryDescription">
                    <h4>
                        My first completely remote job. Silence and the absence of distractions...
                    </h4>
                    <span>
                        DynamicSun — is an small IT company that offers software development as a service (SaaS).
                    </span>
                    <span>
                        Since this company is developing several products for several other companies, the technology stack here is much wider than in the previous places. It was a huge positive moment for me. A wider stack means more technologies that I can work with.
                    </span>
                    <span>
                        When I was working in the office, I was greatly distracted by other people's conversations and other usual office activity. Silence and the absence of distractions - that's what I wanted and that's what I got.
                    </span>
                </div>
            </div>
            <span className="chevronDownIcon">
                    {chevronDownIcon}
            </span>
        </div>
    )
}

export default Experience;