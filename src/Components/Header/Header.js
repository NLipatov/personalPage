import "./Header.css";

const Header = () => {
    return(
        <div className="Header">
            <div className="HeaderContent">
                <span className="Name">
                    NIKITA
                </span>
                <div className="NavBar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

        </div>
    )
};

export default Header;

