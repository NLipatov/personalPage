import ThemeSwitcher from "../SharedComponents/LogoLink/ThemeSwitcher";

const NavBarScreen = ({darkThemeToggler}) => {
    const hideNavBarScreen = () => {
        document.querySelectorAll(".CrossNavBar span")[0].style.display = "";
        document.querySelectorAll(".CrossNavBar span")[1].style.transform = "rotate(90deg)";
        document.querySelectorAll(".CrossNavBar span")[2].style.transform = "rotate(90deg)";
        document.querySelectorAll(".CrossNavBar span")[2].style.marginTop = "10px";
        document.querySelector(".NavBarScreen").style.marginLeft = "100vw";
        document.querySelector("body").style.overflow = "auto";
    };
    return (
        <div className="NavBarScreen">
            <div className="NavBarScreenLinksDiv">
                <a href="#home" id="NavBarHomeLink" onClick={hideNavBarScreen}>Home</a>
                <a href="#about" id="NavBarAboutLink" onClick={hideNavBarScreen}>About</a>
                <a href="#experience" id="NavBarExperienceLink" onClick={hideNavBarScreen}>Experience</a>
                <a href="#portfolio" id="NavBarPortfolioLink" onClick={hideNavBarScreen}>Portfolio</a>
                <a href="#contact" id="NavBarContactLink" onClick={hideNavBarScreen}>Contact</a>
                <ThemeSwitcher toggleIconSpanActive={darkThemeToggler}/>
            </div>
        </div>
    )
}

export default NavBarScreen;