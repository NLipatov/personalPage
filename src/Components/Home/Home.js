import "./Home.css";
import profilePicture from "../../img/photo5463225416312535627.jpg";

const Home = () => {
    return (
        <div className="Home">
            <div className="ShortInfo">
                <span>
                    Hi there!
                </span>
                <div className="introduction">
                    <span>
                        I'm a 
                    </span>
                    <span>
                        Web Developer
                    </span>
                </div>
            </div>
            <div className="PhotoContainer">
                <img className="profilePicture" src={profilePicture}/>
            </div>
        </div>
    )
}

export default Home;