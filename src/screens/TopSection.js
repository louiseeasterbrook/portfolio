import OpenBlurb from "../components/OpenBlurb";
import "./TopSection.css";

const TopSection = () => {
  return (
    <div className="top-container">
      <OpenBlurb />

      <div className="arrow-container">
        <h4>View My Work</h4>
        <div className="arrow-outer">
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
