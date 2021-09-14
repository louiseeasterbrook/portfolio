import "./OpenBlurb.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const OpenBlurb = () => {
  return (
    <div className="blurb-container">
      <h2>Web developer</h2>
      <p>This is a little blurb to eplain what i think</p>
      <p>The second Line of the Paragraph</p>
    </div>
  );
};

export default OpenBlurb;
