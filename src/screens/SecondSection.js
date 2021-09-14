import WebsiteCard from "../components/WebsiteCard";
import "./SecondSection.css";

const SecondSection = () => {
  return (
    <div className="second-container">
      <div className="card-holder">
        <WebsiteCard
          webName="CRUD Website"
          webDescription="this is the description of the webste"
          languages={["React", "Express", "CSS3", "MongoDB", "Node"]}
        />
        <WebsiteCard
          webName="Website with User Authentication"
          webDescription="this is the description of the webste"
          languages={["React", "JavaScript", "CSS3"]}
        />
        <WebsiteCard
          webName="Blue Mountains"
          webDescription="this is the description of the webste"
          languages={["HTML5", "JavaScript", "CSS3"]}
        />
        <WebsiteCard
          webName="Front-End Eccommerce Site"
          webDescription="this is the description of the webste"
          languages={["Javascript", "HTML5", "Sass"]}
        />
      </div>
    </div>
  );
};

export default SecondSection;
