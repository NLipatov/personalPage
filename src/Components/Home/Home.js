import "./Home.css";
import profilePicture from "../../img/photo5463225416312535627.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const downArrows = <FontAwesomeIcon icon={faAngleDoubleDown} />
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
            <div className="downArrowsDiv">
                {downArrows}
            </div>
        </div>
    )
}

export default Home;