import "./ThemeSwitcher.css";

const ThemeSwitcher = ()=>{
    return(
        <div className="darkThemeToggler" onClick={toggleIconSpanActive}>
            <span className="iconSpan">
                
            </span>
    </div>
    )
};

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

export default ThemeSwitcher;