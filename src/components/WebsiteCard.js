import "./WebsiteCard.css";

//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const WebsiteCard = ({ webImage, webDescription, webName, languages }) => {
  return (
    <div className="card-container">
      <div className="img-holder">
        <img src={webImage} alt="img" className="card-image" />
      </div>

      <h4>{webName}</h4>
      <div className="lang-holder">
        {languages.map((el, i) => (
          <p className="lang-display" key={i}>
            {el}
          </p>
        ))}
      </div>
      <p className="card-description">{webDescription}</p>
      <div className="cardBtn-holder">
        <div className="github-icon icon-div">
          <FontAwesomeIcon icon={faGithub} className=" icon" />
        </div>
        <div className="globe-icon icon-div">
          <FontAwesomeIcon icon={faGlobe} className=" icon" />
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
