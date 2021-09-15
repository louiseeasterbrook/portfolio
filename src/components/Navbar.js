import "./Navbar.css";
// import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // console.log(toggleMenu);
  // console.log(screenWidth);

  const navToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    //Change the screen with value
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      //set toogle menu to flase if screen expands past 600px
      if (screenWidth > 600) {
        setToggleMenu(false);
      }
    };
    //everytime the window is resizes the changeWidth function is called
    window.addEventListener("resize", changeWidth);
  }, [screenWidth]);

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
          <a href="">Resume</a>
          <a href="">Github</a>
        </div>
        <div className="nav-btn" onClick={navToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {toggleMenu && screenWidth < 600 && (
        <div className="menu-holder">
          <div className="menu-inner">
            <ul>
              <li>
                <a href="" className="menu-link">
                  Resume
                </a>
              </li>
              <li>
                <a href="" className="menu-link">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
