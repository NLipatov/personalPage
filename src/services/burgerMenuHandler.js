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
    else
    {
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

const hideNavBarScreen = () => {
    document.querySelectorAll(".CrossNavBar span")[0].style.display = "";
    document.querySelectorAll(".CrossNavBar span")[1].style.transform = "rotate(90deg)";
    document.querySelectorAll(".CrossNavBar span")[2].style.transform = "rotate(90deg)";
    document.querySelectorAll(".CrossNavBar span")[2].style.marginTop = "10px";
    document.querySelector(".NavBarScreen").style.marginLeft = "100vw";
    document.querySelector("body").style.overflow = "auto";
};

export { hideNavBarScreen, onCrossNavBarClick };