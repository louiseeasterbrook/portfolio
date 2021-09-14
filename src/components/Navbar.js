import "./Navbar.css";
// import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav-outer">
      <div className="nav-inner">
        <div className="title-section">
          <FontAwesomeIcon icon={faMouse} className="mouse-icon" />
          <a href="" className="page-title">
            Louise Easterbrook
          </a>
        </div>

        <div className="nav-links">
          <a href="">Reusme</a>
          <a href="">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
