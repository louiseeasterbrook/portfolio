import "./WebsiteCard.css";
// import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const WebsiteCard = ({ webImage, webDescription, webName, languages }) => {
  return (
    <div className="card-container">
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
        <FontAwesomeIcon icon={faGithub} className="github-icon icon" />
        <FontAwesomeIcon icon={faGlobe} className="globe-icon icon" />
      </div>
    </div>
  );
};

export default WebsiteCard;
