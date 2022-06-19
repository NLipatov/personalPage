import Declarator from "../ComponentDeclarator/Declarator";
import "./Portfolio.css";
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
    width: '70%',
    height: ['450px', '270px'],
    layout: [1, 4],
    photos: [
      { source: 'https://i.ibb.co/dWW4Qmt/Screenshot-2022-06-14-134708.png' },
      { source: 'https://i.ibb.co/McLfY5V/Screenshot-2022-06-14-134708.png' },
      { source: 'https://i.ibb.co/CV47YJk/Screenshot-2022-06-14-134708.png' },
    ],
    showNumOfRemainingPhotos: true
  };

const Portfolio = () => {
    return (
        <div className="PortfolioSection visual_component" id="portfolio">
            <Declarator DeclaratorValue={"Portfolio"}/>
            <div className="PhotoCollage">
                <ReactPhotoCollage {...setting} />
            </div>
        </div>
    )
}

export default Portfolio;