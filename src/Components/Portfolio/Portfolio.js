import Declarator from "../ComponentDeclarator/Declarator";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faLaptopCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import LogoItem from "../SharedComponents/LogoLink/LogoLink";
import Carousel from 'react-elastic-carousel';

const gitHubIcon = <FontAwesomeIcon icon={faGithub} style={{fontSize: "43pt", color: "white"}}/>;
const globeIcon = <FontAwesomeIcon icon={faGlobe} style={{fontSize: "43pt", color: "white"}}/>;
const backendIcon = <FontAwesomeIcon icon={faCode} style={{fontSize: "13pt", color: "#BC8CF2"}}/>;
const frontendIcon = <FontAwesomeIcon icon={faLaptopCode} style={{fontSize: "13pt", color: "#BC8CF2"}}/>;

// import React from "react";

// const setting = {
//     width: '70%',
//     height: ['450px', '270px'],
//     layout: [1, 4],
//     photos: [
//       { source: 'https://i.ibb.co/dWW4Qmt/Screenshot-2022-06-14-134708.png' },
//       { source: 'https://i.ibb.co/McLfY5V/Screenshot-2022-06-14-134708.png' },
//       { source: 'https://i.ibb.co/CV47YJk/Screenshot-2022-06-14-134708.png' },
//     ],
//     showNumOfRemainingPhotos: true
//   };

const items = [
    <PortfolioItem 
        icon={gitHubIcon}
        SourceCodeLink={"https://github.com/NLipatov/alphaTestApi"}
        Declaration={"React Wheat Field"}
        Text={"The idea of this application is quite simple: depending on the time on your computer, it draws a landscape with a wheat field. As in reality, the sun will rise in the early morning and set in the late evening. Depending on the time, the representation of clouds, fields, and the sun will change. Open the demo and take a look!"}
        itemCategoryIcon={frontendIcon}
        itemCategoryText={"frontend"}
        featuresDescriptionArray={["JS animation", "Working with client time", "Live layout generation"]}
        demoIcon={globeIcon}
        demoLink={"https://nlipatov.github.io/wheatField/"}/>,

    <PortfolioItem 
        icon={gitHubIcon}
        SourceCodeLink={"https://github.com/NLipatov/alphaTestApi"}
        Declaration={".NET 6 API"}
        Text={"I've started this project as a test task for Alpha-Strahovanie which is one the biggest insurance companies in Russia. It's affiliated with Alpha-Bank."}
        itemCategoryIcon={backendIcon}
        itemCategoryText={"backend"}
        featuresDescriptionArray={["C# Base API Controller implementation", "Swagger", "DTOs", "In memory DB"]}/>,

    <PortfolioItem 
        icon={gitHubIcon}
        SourceCodeLink={"https://github.com/NLipatov/alphaTestApi"}
        Declaration={"This site itself!"}
        Text={"I didn't like the way the resume was formed hh.ru - the most popular job search site in Russia. Well, I'm a web developer myself. What prevents me from making a resume page myself? So Here it is."}
        itemCategoryIcon={frontendIcon}
        itemCategoryText={"frontend"}
        featuresDescriptionArray={["Various npm packages", "Component Folder Structure"]}/>,
]

const Portfolio = () => {
    return (
        <div className="PortfolioSection visual_component" id="portfolio">
            <Declarator DeclaratorValue={"Portfolio"}/>
            {/* <div className="PhotoCollage">
                <ReactPhotoCollage {...setting} />
            </div> */}
            <Carousel
                autoPlaySpeed={3000}
                showArrows={false}>
                {items.map(item => item)}
            </Carousel>
            {/* <PortfolioItem 
                icon={gitHubIcon}
                SourceCodeLink={"https://github.com/NLipatov/alphaTestApi"}
                Declaration={".NET 6 API"}
                Text={"I've started this project as a test task for Alpha-Strahovanie which is one the biggest insurance companies in Russia. It's affiliated with Alpha-Bank."}
                itemCategoryIcon={backendIcon}
                itemCategoryText={"backend"}
                featuresDescriptionArray={["C# Base API Controller implementation", "Swagger", "DTOs", "In memory DB"]}/> */}
        </div>
    )
}

export default Portfolio;