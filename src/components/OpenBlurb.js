import "./OpenBlurb.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OpenBlurb = ({ projectsRef }) => {
  const goToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openResume = (e) => {
    e.preventDefault();
    window.open(
      "https://github.com/louiseeasterbrook/portfolio/blob/master/resume.pdf"
    );
  };

  return (
    <div className="blurb-container">
      <div className="left-blurb">
        <div className="name">
          <h1>Louise </h1>
          <h1>Easterbrook</h1>
        </div>

        <div className="social-holder">
          <FontAwesomeIcon
            icon={faGithub}
            className="fb-icon icon"
            onClick={() =>
              window.open("https://github.com/louiseeasterbrook", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fb-icon icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/louise-easterbrook-a445a4219/",
                "_blank"
              )
            }
          />
          {/* <FontAwesomeIcon
            icon={faEnvelope}
            className="fb-icon icon"
            onClick={() =>
              window.open(
                "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
              )
            }
          /> */}
        </div>
      </div>
      <div className="divider" />
      <div className="right-blurb">
        <h4 className="subtitle">Full Stack Web Developer</h4>
        <h4 className="intro">
          I am a Web and Mobile App Development graduate from Macquarie
          University. I love bulding dynamic and responsive wesbites using{" "}
          <span className="highlight">HTML</span>, CSS and JavaScript. <br /> I
          am experienced working with ReactJS, Java and a variety of CSS
          frameworks.
          <div className="btn-holder">
            <button className="main-btn port-btn" onClick={goToProjects}>
              View Projects
            </button>

            <button className="main-btn res-btn" onClick={openResume}>
              View Resume
            </button>
          </div>
        </h4>
      </div>
    </div>
  );
};

export default OpenBlurb;
