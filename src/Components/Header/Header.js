import "./Header.css";
import NavBarScreen from "./NavBarScreen";
import ThemeSwitcher from "../SharedComponents/LogoLink/ThemeSwitcher";
import { timeService } from '../../services/timeService';
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setToDark, setToLight } from '../../Store/counterSlice';

const Header = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    // const initialThemeSwitch = useRef({
    //     switched: false,
    // });

    // useEffect(()=>{
    //     const {getUserHours} = timeService();
    //     const hours = getUserHours();
    //     if(!(hours >= 22 || hours <= 8))
    //     {
    //         if(initialThemeSwitch.current.switched === false)
    //         {
    //             toggleIconSpanActive();
    //             initialThemeSwitch.current.switched = true;
    //         }
    //     }
    // },[]);

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

    return(
        <>
            <div className="Header">
                <div className="HeaderContent">
                    <span className="Name">
                        NIKITA
                    </span>
                    <span>
                        counter: {count}
                    </span>
                    <button onClick={() => dispatch(setToLight())}>
                        Light
                    </button>
                    <button onClick={() => dispatch(setToDark())}>
                        Dark
                    </button>
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

