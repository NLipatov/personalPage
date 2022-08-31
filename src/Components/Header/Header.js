import "./Header.css";
import NavBarScreen from "./NavBarScreen";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeSwitcher from "../SharedComponents/LogoLink/ThemeSwitcher";
import { timeService } from '../../services/timeService';
import { useEffect, useRef } from "react";

const Header = () => {
    const initialThemeSwitch = useRef({
        switched: false,
    });

    useEffect(()=>{
        const {getUserHours} = timeService();
        const hours = 8;
        if(!(hours >= 21 || hours <= 8))
        {
            if(initialThemeSwitch.current.switched === false)
            {
                toggleIconSpanActive();
                initialThemeSwitch.current.switched = true;
            }
        }
    },[]);

    let crossAnimationPlayed = false;
    const onCrossNavBarClick = () => {
        if(!crossAnimationPlayed){
            document.querySelector(".NavBarScreen").style.opacity = 1;
            document.querySelectorAll(".CrossNavBar span")[0].style.display = "none";
            document.querySelectorAll(".CrossNavBar span")[1].style.transform = "rotate(45deg)";
            document.querySelectorAll(".CrossNavBar span")[2].style.transform = "rotate(-45deg)";
            document.querySelectorAll(".CrossNavBar span")[1].style.marginTop = "0px";
            document.querySelectorAll(".CrossNavBar span")[2].style.marginTop = "0px";
            document.querySelector(".NavBarScreen").style.marginLeft = "0vw";
            document.querySelector("body").style.overflow = "hidden";
            crossAnimationPlayed = true;
        }
        else{
            document.querySelector(".NavBarScreen").style.opacity = 0;
            document.querySelectorAll(".CrossNavBar span")[0].style.display = "";
            document.querySelectorAll(".CrossNavBar span")[1].style.transform = "rotate(90deg)";
            document.querySelectorAll(".CrossNavBar span")[2].style.transform = "rotate(90deg)";
            document.querySelectorAll(".CrossNavBar span")[1].style.marginTop = "-10px";
            document.querySelectorAll(".CrossNavBar span")[2].style.marginTop = "10px";
            document.querySelector(".NavBarScreen").style.marginLeft = "100vw";
            document.querySelector("body").style.overflow = "auto";
            crossAnimationPlayed = false;
        }

    };
    const sunIcon = <FontAwesomeIcon icon={faSun} style={{color: "black", fontSize: "12pt"}}/>
    const moonIcon = <FontAwesomeIcon icon={faMoon} style={{color: "black", fontSize: "12pt"}}/>

    const toggleIconSpanActive = () =>{
        const themeTogglers = document.querySelectorAll(".iconSpan");
        themeTogglers.forEach((x)=>{
            x.classList.toggle("_iconSpanActive");
        });

        const themeTogglerDivs = document.querySelectorAll(".darkThemeToggler");
        themeTogglerDivs.forEach((x)=>{
            x.classList.toggle("_darkThemeTogglerActive");
        });

        document.querySelector(".Home").classList.toggle("HomeLight");
        document.querySelector(".About").classList.toggle("AboutLight");
        document.querySelector(".Skills").classList.toggle("SkillsLight");
        document.querySelector(".Experience").classList.toggle("ExperienceLight");
        document.querySelector(".AGroupStyle").classList.toggle("blackBorder");
        document.querySelector(".ServiceDiv").classList.toggle("ServiceDivLight");

        const serviceSquares = document.querySelectorAll(".singleServiceItem");
        serviceSquares.forEach((x)=>{
            x.classList.toggle("singleServiceItemBlackBorder");
        });

        const portfolioItems = document.querySelectorAll(".PortfolioItem");
        portfolioItems.forEach((x)=>{
            x.classList.toggle("PortfolioItemLight");
        });

        document.querySelector(".PortfolioSection").classList.toggle("PortfolioSectionLight");

        const portfolioSkillIcon = document.querySelectorAll(".itemCategory");
        portfolioSkillIcon.forEach((x)=>{
            x.classList.toggle("itemCategoryLight");
        });

        document.querySelector(".Contacts").classList.toggle("ContactsLight");

        const logoItems = document.querySelectorAll(".LogoItemInfo");
        logoItems.forEach((x)=>{
            x.classList.toggle("LogoItemInfoLight");
        });

        const whiteIcons = document.querySelectorAll(".whiteIcon");
        whiteIcons.forEach((x)=>{
            x.classList.toggle("whiteIconLight");
        });
    } 

    return(
        <>
            <div className="Header">
                <div className="HeaderContent">
                    <span className="Name">
                        NIKITA
                    </span>
                    <div className="NavBar">
                        <ThemeSwitcher toggleIconSpanActive={toggleIconSpanActive}/>
                        <a href="#home" id="NavBarHomeLink">Home</a>
                        <a href="#about" id="NavBarAboutLink">About</a>
                        <a href="#experience" id="NavBarExperienceLink">Experience</a>
                        <a href="#portfolio" id="NavBarPortfolioLink">Portfolio</a>
                        <a href="#contact" id="NavBarContactLink">Contact</a>
                    </div>
                    <div 
                        className="CrossNavBar"
                        onClick={onCrossNavBarClick}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </div>
            <NavBarScreen darkThemeToggler={toggleIconSpanActive}/>
        </>

    )
};

export default Header;

