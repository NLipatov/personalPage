import React from "react";
import "./PortfolioItem.css";
import { ReactPhotoCollage } from "react-photo-collage";
import LogoItem from "../../SharedComponents/LogoLink/LogoLink";

const PortfolioItem = ({imageLinks, Declaration, Text, SourceCodeLink, icon, itemCategoryIcon, itemCategoryText, featuresDescriptionArray, demoIcon, demoLink}) => {
    return( 
        <div className="PortfolioItem">
            <div className="PortfolioItemDescription">
                <div className="ItemDeclaration">
                    <div className="itemCategory">
                        <span>
                            {itemCategoryIcon}
                        </span>
                        <span>
                            {itemCategoryText}
                        </span>
                    </div>
                    <span className="DeclarationText">
                        {Declaration}
                    </span>
                </div>

                <span className="ItemDescription">
                    {Text}
                </span>
                <span className="FeaturesDeclarator">
                    This project Features:
                </span>
                <div className="ItemFeatures">
                    <ul className="FeaturesUL">
                        {featuresDescriptionArray.map((Description, i)=>
                        {
                            return (
                                <li key={i} style={{textAlign:"start"}}>
                                    <span>
                                        {Description}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <span className="PortfolioItemFooter"/>
            <div className="FooterLinks">
                <LogoItem
                    icon={icon}
                    link={SourceCodeLink}
                    linkText={"Source Code"}/>
                {demoIcon !== undefined ? 
                    <LogoItem
                    icon={demoIcon}
                    link={demoLink}
                    linkText={"Live Demo"}/>
                    :
                    null}
            </div>
        </div>
    )
}

export default PortfolioItem;