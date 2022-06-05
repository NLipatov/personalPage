import "./Header.css";

const Header = () => {
    return(
        <div className="Header">
            <div className="HeaderContent">
                <span className="Name">
                    NIKITA
                </span>
                <div className="NavBar">
                    <a href="#home" id="NavBarHomeLink">Home</a>
                    <a href="#about" id="NavBarAboutLink">About</a>
                    <a href="#service" id="NavBarServiceLink">Service</a>
                    <a href="#portfolio" id="NavBarPortfolioLink">Portfolio</a>
                    <a href="#contact" id="NavBarContactLink">Contact</a>
                </div>
            </div>

        </div>
    )
};

export default Header;

