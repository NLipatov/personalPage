import Declarator from "../ComponentDeclarator/Declarator";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import LogoItem from "../SharedComponents/LogoLink/LogoLink";

const gitHubIcon = <FontAwesomeIcon icon={faGithub} style={{fontSize: "43pt", color: "white"}}/>
const backendIcon = <FontAwesomeIcon icon={faCode} style={{fontSize: "13pt", color: "#BC8CF2"}}/>
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

const Portfolio = () => {
    return (
        <div className="PortfolioSection visual_component" id="portfolio">
            <Declarator DeclaratorValue={"Portfolio"}/>
            {/* <div className="PhotoCollage">
                <ReactPhotoCollage {...setting} />
            </div> */}
            <PortfolioItem 
                icon={gitHubIcon}
                SourceCodeLink={"https://github.com/NLipatov/alphaTestApi"}
                Declaration={".NET 6 API"}
                Text={"I've started this project as a test task for Alpha-Strahovanie which is one the biggest insurance companies in Russia. It's affiliated with Alpha-Bank."}
                itemCategoryIcon={backendIcon}
                itemCategoryText={"backend"}
                featuresDescriptionArray={["C# Base API Controller implementation", "Swagger", "DTOs", "In memory DB"]}/>
        </div>
    )
}

export default Portfolio;