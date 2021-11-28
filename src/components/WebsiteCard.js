import "./WebsiteCard.css";

const WebsiteCard = ({
  webImage,
  webDescription,
  webName,
  languages,
  webLink,
  codeLink,
}) => {
  return (
    <div className="card-container">
      <div className="img-holder">
        <img src={webImage} alt="img" className="card-image" />
      </div>

      <div className="text-holder">
        <h4> {webName}</h4>
        <div className="lang-holder">
          {languages.map((el, i) => (
            <p className="lang-display" key={i}>
              {el}
            </p>
          ))}
        </div>

        <p className="card-description">{webDescription}</p>
        <div className="cardBtn-holder">
          <button
            className="main-btn port-btn"
            onClick={() => window.open(`${webLink}`, "_blank")}
          >
            Live Website
          </button>
          <button
            className="main-btn res-btn"
            onClick={() => window.open(`${codeLink}`, "_blank")}
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
