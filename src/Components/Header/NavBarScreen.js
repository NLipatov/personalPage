import ThemeSwitcher from "../SharedComponents/LogoLink/ThemeSwitcher";
import { hideNavBarScreen } from '../../services/burgerMenuHandler';

const NavBarScreen = () => {
    return (
        <div className="NavBarScreen">
            <div className="NavBarScreenLinksDiv">
                <a href="#home" id="NavBarHomeLink" onClick={hideNavBarScreen}>Home</a>
                <a href="#about" id="NavBarAboutLink" onClick={hideNavBarScreen}>About</a>
                <a href="#experience" id="NavBarExperienceLink" onClick={hideNavBarScreen}>Experience</a>
                <a href="#portfolio" id="NavBarPortfolioLink" onClick={hideNavBarScreen}>Portfolio</a>
                <a href="#contact" id="NavBarContactLink" onClick={hideNavBarScreen}>Contact</a>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

export default NavBarScreen;