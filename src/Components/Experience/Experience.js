import "./Experience.css";
import Declarator from "../ComponentDeclarator/Declarator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
                        I started learning programming and after a few weeks I wrote a Python application. My first application was a multithreading app: one thread was handling graphical user interface and other was handling headless Chrome with Selenium library.
                    </span>
                    <span>
                        After my first successful experience, I've started looking for a job where I would find even more opportunities for my professional development.
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
                        IKEA — very kind people, great working culture and constant feeling of care from the employer
                    </h4>
                    <span>
                        At IKEA, I participated in the architecture discussion and development of several projects.
                    </span>
                    <span>
                        I worked at IKEA Esipovo Distribution Center. This place was the center of the company's logistics activities in Russia. The geography of our activity was tremendous, our team's task was the availability of goods in all stores of the country. My task was to automate the forecasting of the distribution center's load, the number of vehicles needed, and so on. 
                    </span>
                    <span>
                        Although I really liked the relationships in the team and the attitude of the employer to each member of the team, I was not satisfied with the level of complexity of the work I was doing. I was a manager with programming knowledge.  It was too easy and boring for me...
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
                        This was my first job job experience in IT. And I really liked it
                    </h4>
                    <span>
                        In A Group we had a small development team of 5 people. All the guys except me had more than 10 years of programming experience. They all were like demigods from my perspective.
                    </span>
                    <span>
                        Absolutely everything that I have been studying for the last six months was necessary for me when working at this place. And it wasn't even enough! I eagerly read and studied new technologies.
                    </span>
                    <span>
                        Over time, I began to notice the negative aspects of working in this company. For example, we didn't have a code review. It is very important for a novice programmer to hear feedback from an experienced colleague.  I have been developing my project from scratch, from the development of the database schema, all tables, constraints, and so on, to the backend and frontend. No Merge Request, just me alone on my project.
                    </span>
                    <span>
                        On the one hand, I liked that I didn't waste time coordinating my code with a more experienced person. On the other hand, I understood that this could lead to an abundance of bad practices in my code. I started looking for information about how programmers should approach the architecture of their projects.
                    </span>
                    <span>
                    In addition, working in the office you are constantly distracted by the activity of colleagues. Talking, walking people and so on distracts from work. My office was 80 km from my house. I spent 4-6 hours a day on the road. It was exhausting.
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
                        My first completely remote job.
                    </h4>
                    <span>
                        DynamicSun — is an small IT company that offers software development as a service (SaaS).
                    </span>
                    <span>
                        This place was devoid of the shortcomings described in the history earlier. Code review, discussion with colleagues on how and what exactly can be done better, and so on.
                    </span>
                    <span>
                        Since this company is developing several products for several other companies, the technology stack here is much wider than in the previous places. It was a huge positive moment for me. A wider stack means more technologies that I can work with.
                    </span>
                    <span>
                        When I was working in the office, I was greatly distracted by other people's conversations and other usual office activity. Silence and the absence of distractions - that's what I wanted from remote job and that's what I got.
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