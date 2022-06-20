import "./Header.css";
import NavBarScreen from "./NavBarScreen";

const Header = () => {
    let crossAnimationPlayed = false;
    const onCrossNavBarClick = () => {
        if(!crossAnimationPlayed){
            document.querySelectorAll(".CrossNavBar span")[0].style.display = "none";
            document.querySelectorAll(".CrossNavBar span")[1].style.transform = "rotate(45deg)";
            document.querySelectorAll(".CrossNavBar span")[2].style.transform = "rotate(-45deg)";
            document.querySelectorAll(".CrossNavBar span")[2].style.marginTop = "-10px";
            document.querySelector(".NavBarScreen").style.marginLeft = "0vw";
            document.querySelector("body").style.overflow = "hidden"
            crossAnimationPlayed = true;
        }
        else{
            document.querySelectorAll(".CrossNavBar span")[0].style.display = "";
            document.querySelectorAll(".CrossNavBar span")[1].style.transform = "rotate(90deg)";
            document.querySelectorAll(".CrossNavBar span")[2].style.transform = "rotate(90deg)";
            document.querySelectorAll(".CrossNavBar span")[2].style.marginTop = "10px";
            document.querySelector(".NavBarScreen").style.marginLeft = "100vw";
            document.querySelector("body").style.overflow = "auto";
            crossAnimationPlayed = false;
        }

    };
    return(
        <>
            <div className="Header">
                <div className="HeaderContent">
                    <span className="Name">
                        NIKITA
                    </span>
                    <div className="NavBar">
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

