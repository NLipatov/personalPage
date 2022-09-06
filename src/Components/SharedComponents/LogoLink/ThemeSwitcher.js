import "./ThemeSwitcher.css";

const ThemeSwitcher = ({toggleIconSpanActive})=>{
    return(
        <div className="darkThemeToggler" onClick={toggleIconSpanActive}>
            <span className="iconSpan">
                
            </span>
    </div>
    )
};

export default ThemeSwitcher;