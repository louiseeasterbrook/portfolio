import "./Header.css";

const Header = () => {
  return (
    <div className="header-outer">
      <div className="header-inner">
        <div className="logo">
          <h1>LE</h1>
        </div>

        <div className="nav-links">
          <a
            href="https://github.com/louiseeasterbrook/portfolio"
            target="_blank"
          >
            Github
          </a>

          <a
            href="https://github.com/louiseeasterbrook/portfolio/blob/master/Resumecopy.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
