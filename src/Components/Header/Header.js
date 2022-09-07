import "./Header.css";
import NavBarScreen from "./NavBarScreen";
import ThemeSwitcher from "../SharedComponents/LogoLink/ThemeSwitcher";
import { onCrossNavBarClick } from '../../services/burgerMenuHandler';

const Header = () => {
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

