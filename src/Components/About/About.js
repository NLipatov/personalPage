import "./About.css";
import AboutPicture from "../../img/photo5463225416312535572.jpg";

const About = () => {
    return ( 
        <div className="About" id="about">
            <div style={{minWidth: '320px'}} className="PhotoContainer">
                <img className="profilePicture aboutPhotoContainer" src={AboutPicture}/>
            </div>
            <div className="TextContainer">
                <span>
                    My name is Nikita
                </span>
                <span>
                Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. 
                Recusandae Aut Adipisci Necessitatibus Veniam, Provident Vero Architecto 
                Praesentium, Non Sequi Libero Corrupti Molestias. Architecto 
                Voluptate Eligendi Maiores, Error Magni Accusamus Officia.
                </span>
            </div>
        </div>
    )
}

export default About;