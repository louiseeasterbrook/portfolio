import "./TopSection.css";

import OpenBlurb from "../components/OpenBlurb";

const TopSection = ({ projectsRef }) => {
  return (
    <div className="top-container">
      <OpenBlurb projectsRef={projectsRef} />
    </div>
  );
};

export default TopSection;
