import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
          <FontAwesomeIcon icon={faLaptop} className="laptop-icon" />

          <div className="title-words">
            <a href="" className="page-title">
              Louise Easterbrook
            </a>
            <p>Full Stack Web Developer</p>
          </div>
        </div>

        <div className="nav-links">
          <a href="" target="_blank">
            Resume
          </a>
          <a href="https://github.com/louiseeasterbrook" target="_blank">
            Github
          </a>
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
