import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <FontAwesomeIcon icon={faLaptop} className="laptop-icon" />
      <p>Louise Easterbrook 2021</p>
    </div>
  );
};

export default Footer;
