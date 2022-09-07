import "./Header.css";
import NavBarScreen from "./NavBarScreen";
import ThemeSwitcher from "../SharedComponents/LogoLink/ThemeSwitcher";
import { onCrossNavBarClick } from '../../services/burgerMenuHandler';
import { timeService } from '../../services/timeService';
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import globalThemeSwitcher from '../../services/globalThemeSwitcher';

const Header = () => {
    const themeNormalisation = useRef({isNormalized: false});
    const currentTheme = useSelector((state) => state.counter.value);
    useEffect(() => {
        const {getThemeBasedOnUserTime} = timeService();
        if(currentTheme !== getThemeBasedOnUserTime() && themeNormalisation.current.isNormalized === false) {
            globalThemeSwitcher();
            themeNormalisation.current.isNormalized = true;
        }
    }, [currentTheme]);
    return(
        <>
            <div className="Header">
                <div className="HeaderContent">
                    <span className="Name">
                        NIKITA
                    </span>
                    <div className="NavBar">
                        <ThemeSwitcher/>
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
            <NavBarScreen/>
        </>

    )
};

export default Header;

