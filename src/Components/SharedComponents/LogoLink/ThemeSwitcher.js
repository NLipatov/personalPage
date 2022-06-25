import "./ThemeSwitcher.css";

const ThemeSwitcher = ({toggleIconSpanActive})=>{
    // const onActivateSwitcher = () => {
    //     document.querySelector(".iconSpan").classList.toggle("_iconSpanActive");
    //     document.querySelector(".darkThemeToggler").classList.toggle("_darkThemeTogglerAcive");

    //     toggleIconSpanActive();
    // };
    return(
        <div className="darkThemeToggler" onClick={toggleIconSpanActive}>
            <span className="iconSpan">
                
            </span>
    </div>
    )
};

export default ThemeSwitcher;